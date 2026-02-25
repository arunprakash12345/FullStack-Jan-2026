// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:

// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:

// addTask(task): Adds a new task.
// removeTask(task): Removes a task.
// markComplete(task): Marks a task as completed.
// listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
  let tasks = [];

  function addTask(task) {
    tasks.push({ task, isCompleted: false });
  }

  function removeTask(task) {
    tasks = tasks?.filter((t) => t?.task !== task);
  }

  function markComplete(task) {
    let updatedTask;
    tasks = tasks.map((t) => {
      if (t.task == task) {
        t.isCompleted = true;
      }
      updatedTask = t;
    });
    return updatedTask;
  }

  function listTasks() {
    return tasks;
  }

  return {
    addTask,
    removeTask,
    markComplete,
    listTasks,
  };
}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do laundry");
todo.addTask("Clean room");
console.log(todo.listTasks());
console.log("-----");
console.log(todo.markComplete("Buy groceries"));
console.log(todo.listTasks());
console.log("-----");
todo.removeTask("Do laundry");
console.log(todo.listTasks());
