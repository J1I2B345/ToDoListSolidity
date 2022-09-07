const TaskContract = artifacts.require("TaskContract.sol");

module.exports = function (deployer) {
	deployer.deploy(TaskContract);
};
