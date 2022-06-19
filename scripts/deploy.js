const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const VendingMachineFactory = await hre.ethers.getContractFactory(
    "VendingMachine"
  );
  console.log(
    "[Vending Machine Contract Deployment] :",
    "Contract factory created"
  );
  const vendingMachineContract = await VendingMachineFactory.deploy();
  console.log(
    "[Vending Machine Contract Deployment] :",
    "Contract factory deployed"
  );

  await vendingMachineContract.deployed();
  console.log(
    "[Vending Machine Contract Deployment] :",
    "Deployment successful :",
    vendingMachineContract.address
  );
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
