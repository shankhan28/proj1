document.getElementById('taskForm').addEventListener('submit', addTask);

let tasks = [];

function addTask(e) {
    e.preventDefault();

    let taskName = document.getElementById('taskName').value;
    let category = document.getElementById('category').value;
    let deadline = document.getElementById('deadline').value;
    let priority = document.getElementById('priority').value;
    let label = document.getElementById('label').value;
    let status = document.getElementById('status').value;

    let task = {
        taskName,
        category,
        deadline,
        priority,
        label,
        status
    };

    tasks.push(task);
    document.getElementById('taskForm').reset();
    displayTasks();
}

function displayTasks() {
    let tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        taskDiv.innerHTML = `
            <h3>${task.taskName}</h3>
            <p>Category: ${task.category}</p>
            <p>Deadline: ${new Date(task.deadline).toLocaleDateString()}</p>
            <p>Priority: ${task.priority}</p>
            <p>Label: ${task.label}</p>
            <p class="status ${task.status.toLowerCase().replace(' ', '-')}" onclick="updateStatus(${index})">${task.status}</p>
        `;

        tasksDiv.appendChild(taskDiv);
    });
}

function updateStatus(index) {
    let newStatus = prompt("Update status (Not Started, In Progress, Completed):");
    if (newStatus) {
        tasks[index].status = newStatus;
        displayTasks();
    }
}
