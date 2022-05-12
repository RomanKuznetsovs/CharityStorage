const hre = require("hardhat");
const ethers = hre.ethers

async function main() {
  const[signer] = await ethers.getSigners()

  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();
  await storage.deployed();

  console.log(storage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });