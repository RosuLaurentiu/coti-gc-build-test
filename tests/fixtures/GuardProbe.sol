// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import {MpcCore, gtBool} from "@coti-io/coti-contracts/contracts/utils/mpc/MpcCore.sol";

/// @dev Regression fixture for a simulated true-during-estimation condition.
contract GuardProbe {
    error Rejected();

    function validityGuard() external {
        gtBool valid = MpcCore.setPublic(true);
        if (!MpcCore.decrypt(valid)) revert Rejected();
    }

    function invalidityGuard() external {
        gtBool invalid = MpcCore.setPublic(false);
        if (MpcCore.decrypt(invalid)) revert Rejected();
    }
}
