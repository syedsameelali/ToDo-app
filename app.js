function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
      alert("Please enter a task");
      return;
    }

    
    
    var input = document.createElement("input");
    input.type = "text";
    input.value = taskText;
    input.setAttribute("readonly", true);
    
    var todoList = document.getElementById("todo-list");
    
    var li = document.createElement("li");
    li.className = "todo-item";

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = function() {
      input.removeAttribute("readonly");
      input.focus();
      editBtn.style.display = "none";
      saveBtn.style.display = "inline-block";
    };

    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "save-btn";
    saveBtn.style.display = "none";
    saveBtn.onclick = function() {
      input.setAttribute("readonly", true);
      editBtn.style.display = "inline-block";
      saveBtn.style.display = "none";
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    taskInput.value = "";
  }

  function deleteAllTasks() {
    var todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
  }

 