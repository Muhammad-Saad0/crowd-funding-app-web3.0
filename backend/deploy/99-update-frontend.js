const { ethers, network } = require("hardhat");
const fs = require("fs");

const abiFilePath = "../frontend/src/constants/genesis-abi.json";
const contractAddressesFilePath =
  "../frontend/src/constants/contract-addresses.json";

module.exports = async () => {
  const Genesis = await ethers.getContract("Genesis");
  const abi = Genesis.interface.format(ethers.utils.FormatTypes.json);

  let contractAddresses = fs.readFileSync(
    contractAddressesFilePath,
    "utf-8"
  );
  contractAddresses = JSON.parse(contractAddresses);

  const dataToWrite = {
    genesisAddress: Genesis.address,
  };

  contractAddresses[network.config.chainId] = dataToWrite;
  const jsonData = JSON.stringify(contractAddresses);

  fs.writeFileSync(contractAddressesFilePath, jsonData);
  fs.writeFileSync(abiFilePath, abi);
};
