App = {
	contracts: {},
	init: async () => {
		await App.loadEthereum();
		await App.loadAccount();
		await App.loadContracts();
		App.render();
		await App.renderTasks();
	},
	loadEthereum: async () => {
		if (window.ethereum) {
			App.web3Provider = window.ethereum;
			await window.ethereum.request({ method: "eth_requestAccounts" });
		} else if (window.web3) {
			web3 = new Web3(window.web3.currentProvider);
		} else {
			console.log("Try installing Metamask");
		}
	},

	loadAccount: async () => {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		App.account = accounts[0];
	},

	loadContracts: async () => {
		const res = await fetch("TaskContract.json");
		const tasksContractJSON = await res.json();
		App.contracts.taskContract = TruffleContract(tasksContractJSON);

		App.contracts.taskContract.setProvider(App.web3Provider);
		App.tasksContract = await App.contracts.taskContract.deployed();
	},

	render: () => {
		document.getElementById("account").innerText = App.account;
	},

	renderTasks: async () => {
		const taskCounter = await App.tasksContract.taskCounter();
		const taskCounterNumber = taskCounter.toNumber();
		let html = "";
		for (let index = 1; index <= taskCounterNumber; index++) {
			const task = await App.tasksContract.tasks(index);
			const taskId = task[0];
			const taskTitle = task[1];
			const taskDescription = task[2];
			const taskDone = task[3];
			const taskCreated = task[4];

			let taskElement = `
            <div class="card bg-dark rounded-0 mb-2"> 
                <div class="card-header d-flex justify-content-between align-items-center"> 
                    <span> ${taskTitle} 
                    </span>
                    <div class="form-check form-switch">
                        <input data-id="${taskId}" onchange="App.toggleDone(this)" class="form-check-input" type="checkbox" ${
				taskDone && "checked"
			}/>
                    </div>
                </div>
                <div class="card-body"> 
                    <span> ${taskDescription}
                    </span>
                    <p class="text-muted"> Created at: ${new Date(
											taskCreated * 1000
										).toLocaleString()}</p>
                </div>
            </div>
            `;
			html += taskElement;
		}
		document.querySelector("#taskList").innerHTML = html;
	},

	createTask: async (title, description) => {
		try {
			const results = await App.tasksContract.createTask(title, description, {
				from: App.account,
			});
			window.location.reload();
		} catch (e) {
			console.log(e.message);
		}
	},
	toggleDone: async (element) => {
		try {
			const taskId = element.dataset.id;

			await App.tasksContract.toggleDone(taskId, { from: App.account });
			window.location.reload();
		} catch (e) {
			console.log(e.message);
		}
	},
};
