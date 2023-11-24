
        document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");
    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            deleteButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });

            taskInput.value = "";
        }else{
            window.alert("Enter Sometask!");
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
