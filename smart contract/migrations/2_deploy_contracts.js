var AuraToken = artifacts.require("AuraToken");

module.exports = function(deployer) {
  deployer.deploy(AuraToken);
};
