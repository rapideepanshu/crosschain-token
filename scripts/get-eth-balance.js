const { ethers } = require("hardhat");


module.exports = async (done) => {
    const TokenEth= await ethers.
  const [sender, _] = await ethers.getSigners();
  const tokenEth = await TokenEth.deployed();
  const balance = await tokenEth.balanceOf(sender);
  console.log('balance',balance.toString());
  done();
};
