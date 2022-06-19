//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor(
        uint256 initialSupply,
        string memory _name,
        string memory _symbol
    ) payable ERC20(_name, _symbol) {
        _mint(msg.sender, initialSupply);
    }
}

contract VendingMachine {
    function createCoin(
        string memory name,
        string memory symbol,
        uint256 supply
    ) public payable {
        ERC20Token token = new ERC20Token{value: msg.value}(
            supply,
            name,
            symbol
        );
        console.log("[createCoin] Contract Owner : %s", msg.sender);
        console.log("[createCoin] Contract Address : %s", address(token));
        console.log("[createCoin] Contract Income : %s", msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
