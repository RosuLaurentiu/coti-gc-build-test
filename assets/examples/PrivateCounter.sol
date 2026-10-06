// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import {
    MpcCore, itUint64, gtUint64, gtBool, ctUint64, utUint64
} from "@coti-io/coti-contracts/contracts/utils/mpc/MpcCore.sol";

/// @notice Version-bound teaching example. This is not a token or custody contract.
/// @dev Local model tests do not establish native authentication or privacy.
///      Overflow rejection discloses one validity bit. Caller and timing are public.
contract PrivateCounter {
    error Unauthorized();
    error CounterOverflow();

    address public immutable owner;
    utUint64 private _total;

    constructor() {
        owner = msg.sender;
        _total = MpcCore.offBoardCombined(MpcCore.setPublic64(0), owner);
    }

    function add(itUint64 calldata encryptedAmount) external {
        if (msg.sender != owner) revert Unauthorized();
        gtUint64 amount = MpcCore.validateCiphertext(encryptedAmount);
        gtUint64 current = MpcCore.onBoard(_total.ciphertext);
        (gtBool overflow, gtUint64 next) =
            MpcCore.checkedAddWithOverflowBit(current, amount);

        // Preserve native rejection. An estimate is not proof that this is valid.
        gtBool valid = MpcCore.not(overflow);
        if (!MpcCore.decrypt(valid)) revert CounterOverflow();
        _total = MpcCore.offBoardCombined(next, owner);
    }

    /// @notice Ciphertext was encrypted for owner when the state was written.
    /// @dev Privacy relies on that encryption, not on a forged eth_call sender check.
    function encryptedTotal() external view returns (ctUint64) {
        return _total.userCiphertext;
    }
}
