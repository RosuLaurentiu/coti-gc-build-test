// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

/// @dev TEST ONLY. Plain values, artificial handles, and no signature validation.
///      This model cannot establish encryption, GC lifetimes, native auth or gas.
contract ModelMpc {
    struct Stored {
        uint64 value;
        address scope;
        address viewer;
        bool exists;
    }

    mapping(uint256 => Stored) private _stored;
    uint256 public lastHandle;
    bool public estimateMode;

    error WrongScope();
    error WrongViewer();
    error UnsupportedType();
    error UnknownHandle();

    function setEstimateMode(bool enabled) external {
        estimateMode = enabled;
    }

    function SetPublic(bytes1 kind, uint256 value) external pure returns (uint256) {
        if (kind == bytes1(uint8(0))) {
            if (value > 1) revert UnsupportedType();
        } else if (kind != bytes1(uint8(4)) || value > type(uint64).max) {
            revert UnsupportedType();
        }
        return value;
    }

    function ValidateCiphertext(bytes1 kind, uint256 value, bytes calldata)
        external pure returns (uint256)
    {
        // Inputs here are plain uint64 values. Signatures are deliberately ignored.
        if (kind != bytes1(uint8(4)) || value > type(uint64).max) revert UnsupportedType();
        return value;
    }

    function OffBoard(bytes1 kind, uint256 value) external returns (uint256) {
        return _store(kind, value, address(0));
    }

    function OffBoardToUser(bytes1 kind, uint256 value, bytes calldata viewer)
        external returns (uint256)
    {
        if (viewer.length != 20) revert UnsupportedType();
        return _store(kind, value, address(bytes20(viewer)));
    }

    function _store(bytes1 kind, uint256 value, address viewer) private returns (uint256 handle) {
        if (kind != bytes1(uint8(4)) || value > type(uint64).max) revert UnsupportedType();
        handle = ++lastHandle;
        _stored[handle] = Stored(uint64(value), msg.sender, viewer, true);
    }

    function OnBoard(bytes1 kind, uint256 handle) external view returns (uint256) {
        if (kind != bytes1(uint8(4))) revert UnsupportedType();
        Stored storage entry = _stored[handle];
        if (!entry.exists) revert UnknownHandle();
        if (entry.scope != msg.sender || entry.viewer != address(0)) revert WrongScope();
        return entry.value;
    }

    function readUserForTest(uint256 handle) external view returns (uint64) {
        Stored storage entry = _stored[handle];
        if (!entry.exists) revert UnknownHandle();
        if (entry.viewer == address(0) || entry.viewer != msg.sender) revert WrongViewer();
        return entry.value;
    }

    function CheckedAdd(bytes3 kinds, uint256 left, uint256 right)
        external pure returns (uint256 overflow, uint256 result)
    {
        if (kinds != bytes3(0x040400)) revert UnsupportedType();
        uint256 wide = left + right;
        overflow = wide > type(uint64).max ? 1 : 0;
        result = uint64(wide);
    }

    function Not(bytes1 kind, uint256 value) external pure returns (uint256) {
        if (kind != bytes1(uint8(0)) || value > 1) revert UnsupportedType();
        return value == 0 ? 1 : 0;
    }

    function Decrypt(bytes1 kind, uint256 value) external view returns (uint256) {
        if (kind != bytes1(uint8(0)) || value > 1) revert UnsupportedType();
        return estimateMode ? 1 : value;
    }
}
