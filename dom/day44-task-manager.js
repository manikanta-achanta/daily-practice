// Day 44: Task Manager Mini Project

class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.render();
  }

  add(task) {
    this.tasks.push(task);
    this.save();
    this.render();
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  render() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    this.tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerText = task;
      list.appendChild(li);
    });
  }
}

const manager = new TaskManager();

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    manager.add(input.value);
    input.value = "";
  }
}