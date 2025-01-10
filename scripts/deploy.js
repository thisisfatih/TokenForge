const { ethers } = require("hardhat");

async function main() {
  const TokenForge = await ethers.getContractFactory("TokenForge");
  const tokenForge = await TokenForge.deploy("TokenForge", "TNF", 1000000);

  await tokenForge.deployed();

  console.log("TokenForge deployed to:", tokenForge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });