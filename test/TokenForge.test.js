const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenForge", function () {
  it("Should deploy with the correct name, symbol, and initial supply", async function () {
    const TokenForge = await ethers.getContractFactory("TokenForge");
    const tokenForge = await TokenForge.deploy("TokenForge", "TNF", 1000000);
    await tokenForge.deployed();

    expect(await tokenForge.name()).to.equal("TokenForge");
    expect(await tokenForge.symbol()).to.equal("TNF");
    expect(await tokenForge.totalSupply()).to.equal(1000000);
  });
});