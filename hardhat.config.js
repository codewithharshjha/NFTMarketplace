require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    hardhat:{},
    polygon_mumbai:{
      url:'https://polygon-mainnet.g.alchemy.com/v2/teAp1I3j_JSDOvy14uGWLLCmBZuVVtWh',
      accounts:[
    `0x${"6fd59f71789b386d8aa78d0e6b0dfb5f04dddff1609c832efa3179edb65d8184"}`
      ]
    }

  }
};
