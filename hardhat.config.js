/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
