import { BarTask } from "../types/bar-task";
import { Subproject, Task } from "../types/public-types";

export function isKeyboardEvent(
  event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent
): event is React.KeyboardEvent {
  return (event as React.KeyboardEvent).key !== undefined;
}

export function isMouseEvent(
  event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent
): event is React.MouseEvent {
  return (event as React.MouseEvent).clientX !== undefined;
}

export function isBarTask(task: Task | BarTask): task is BarTask {
  return (task as BarTask).x1 !== undefined;
}

export function removeHiddenTasks(tasks: Task[]) {
  // const groupedTasks = tasks.filter(
  //   (t) => t.hideChildren && t.type === "project"
  // );

  //modification
  const groupedTasks = tasks.filter(
    (t) => t.hideChildren && (t.type === "project" || t.type === "subproject")
  );
  if (groupedTasks.length > 0) {
    for (let i = 0; groupedTasks.length > i; i++) {
      const groupedTask = groupedTasks[i];
      const children = getChildren(tasks, groupedTask);
      tasks = tasks.filter((t) => children.indexOf(t) === -1);
    }
  }
  return tasks;
}

// function getChildren(taskList: Task[], task: Task) {
//   let tasks: Task[] = [];
//   if (task.type !== "project") {
//     tasks = taskList.filter(
//       (t) => t.dependencies && t.dependencies.indexOf(task.id) !== -1
//     );
//   } else {
//     tasks = taskList.filter((t) => t.project && t.project === task.id);
//   }
//   var taskChildren: Task[] = [];
//   tasks.forEach((t) => {
//     taskChildren.push(...getChildren(taskList, t));
//   });
//   tasks = tasks.concat(tasks, taskChildren);
//   return tasks;
// }

//modification starts

function getChildren(taskList: Task[], task: Task): Task[] {
  let tasks: Task[] = [];

  if (task.type !== "project" && task.type !== "subproject") {
    // If the task is not a project or subproject, check for dependencies
    tasks = taskList.filter(
      (t) => t.dependencies && t.dependencies.indexOf(task.id) !== -1
    );
  } else {
    // If the task is a project or subproject, find its child tasks
    tasks = taskList.filter((t) => t.project && t.project === task.id);

    // If it's a subproject, find its own sub-tasks
    if (task.type === "subproject") {
      tasks.push(...taskList.filter((t) => t.project === task.id)); // Add tasks directly under this subproject
    }
  }

  // Recursively get all the children of the tasks
  let taskChildren: Task[] = [];
  tasks.forEach((t) => {
    taskChildren.push(...getChildren(taskList, t));
  });

  tasks = tasks.concat(taskChildren); // Combine current tasks and their recursive children
  return tasks;
}

export function flattenTasks(projects: any[]): Task[] {
  let tasks: Task[] = [];

  projects.forEach((project) => {
    // Add the project task
    tasks.push({
      ...project,
      type: "project", // Ensure the project task type is set correctly
    });

    // Flatten the subprojects
    if (project.subprojects) {
      project.subprojects.forEach((subproject: Subproject) => {
        // Add subproject task
        tasks.push({
          ...subproject,
          type: "subproject", // Ensure the subproject type is set
          project: project.id, // Link the subproject to its parent project
        });

        // Add tasks for the subproject
        if (subproject.tasks) {
          subproject.tasks.forEach((task: Task) => {
            tasks.push({
              ...task,
              type: "task", // Ensure task type is set correctly
              project: subproject.id, // Link the task to its subproject
            });
          });
        }
      });
    }
  });

  return tasks;
}

// modification ends

export const sortTasks = (taskA: Task, taskB: Task) => {
  const orderA = taskA.displayOrder || Number.MAX_VALUE;
  const orderB = taskB.displayOrder || Number.MAX_VALUE;
  if (orderA > orderB) {
    return 1;
  } else if (orderA < orderB) {
    return -1;
  } else {
    return 0;
  }
};
