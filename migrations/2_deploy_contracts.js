const MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  deployer.deploy(MyToken,"Fei","FEI",1000);
  deployer.deploy(MyToken,"Rari","RAR",1000);
};
