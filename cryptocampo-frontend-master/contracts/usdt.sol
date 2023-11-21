//SPDX-License-Identifier: None
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20 {
    constructor() ERC20("USDT", "USDT") {
      _mint(msg.sender, 100000000 * 10 ** 18);
    }
}