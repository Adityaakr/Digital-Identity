  require("@nomicfoundation/hardhat-toolbox");
  const fs = require("fs")
  const privateKey = fs.readFileSync('secret.txt').toString()

  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat:{
      chainId: 4202
    },
    BitTorrent:{
      url:"https://pre-rpc.bt.io/",
      accounts:[privateKey],
      gasPrice: 10000000,
    },
  //similarly we can add more networks as well
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};



