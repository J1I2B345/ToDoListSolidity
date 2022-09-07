const TaskContract = artifacts.require("TaskContract");

contract("TaskContract", () => {
	before(async () => {
		this.taskContract = await TaskContract.deployed();
	});

	it("contract deployed succesfully", async () => {
		const address = this.taskContract.address;

		assert.notEqual(address, null);
		assert.notEqual(address, 0x0);
		assert.notEqual(address, "");
		assert.notEqual(address, undefined);
	});

	it("get Tasks List", async () => {
		const taskCounter = await this.taskContract.taskCounter();
		const task = await this.taskContract.tasks(taskCounter);
		assert.equal(task.id.toNumber(), taskCounter);
	});

	it("get Task id = 1", async () => {
		const taskCounter = await this.taskContract.taskCounter();
		const task = await this.taskContract.tasks(1);
		assert.equal(task.id.toNumber(), 1);
		assert.equal(task.title, "Mi primer tarea");
		assert.equal(task.description, "Estudiando solidity");
		assert.equal(task.done, false);
	});

	it("create Task", async () => {
		const task = await this.taskContract.createTask(
			"Tarea de test automatizado",
			"Descripción de test automatizado"
		);
		const taskEvent = task.logs[0].args;
		const taskId = taskEvent.id;

		const tasksCounter = await this.taskContract.taskCounter();

		assert.equal(tasksCounter.toNumber(), taskId.toNumber());
		assert.equal(taskEvent.title, "Tarea de test automatizado");
		assert.equal(taskEvent.description, "Descripción de test automatizado");
		assert.equal(taskEvent.done, false);
	});

	it("task toggle done", async () => {
		const result = await this.taskContract.toggleDone(1);
		const taskEvent = result.logs[0].args;
		const task = await this.taskContract.tasks(1);

		assert.equal(task.done, true);
		assert.equal(taskEvent.id, 1);
		assert.equal(taskEvent.done, true);
	});
});
