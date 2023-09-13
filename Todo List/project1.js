//Variables
const addTask = document.getElementById('add-task') ;
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task')

// Event Listener for Add button
addTask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li)

    let checkButton = document.createElement("button");
    checkButton.innerHTML = 'Check';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert("Please enter an input");
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';   
    
    
    checkButton.addEventListener('click', function(e) {

        checkButton.parentElement.style.textDecoration = "line-through";
    
    });

    deleteButton.addEventListener('click', function(e) {

        let target = e.target;
        console.log(target.parentElement);
        target.parentElement.remove();

    });
});