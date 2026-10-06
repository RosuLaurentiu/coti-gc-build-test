// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import {MpcCore, itUint64} from "@coti-io/coti-contracts/contracts/utils/mpc/MpcCore.sol";

// Deliberately invalid: validateCiphertext returns garbledtext, not inputtext.
contract BadStoredInput {
    itUint64 private _stored;

    function store(itUint64 calldata value) external {
        _stored = MpcCore.validateCiphertext(value);
    }
}
