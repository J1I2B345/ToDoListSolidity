document.addEventListener("DOMContentLoaded", () => {
	App.init();
});

let taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	App.createTask(taskForm["title"].value, taskForm["description"].value);
});
