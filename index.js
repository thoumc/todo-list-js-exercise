// Arrays to keep track of each task's state
const taskTitles = {};
const taskComplete = {};
const taskDescriptions = {};

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

// Print the state of a task to the console in a nice readable way
    logState : function() {
      console.log(`${task.title} has ${task.complete ? "" : "not "}been completed.`)
    },

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function () {
      this.complete = true;
    },

  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}




//delivering code

const task1 = newTask("Clean cat litter", "Take all the  💩 out of the litter box")
const task2 = newTask("Do Laundry", "😨")
const tasks = [task1, task2];

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks)
