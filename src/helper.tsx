// import { Task } from "../../dist/types/public-types";
import { flattenTasks, removeHiddenTasks } from "./helpers/other-helper";
import { Project, Task } from "./types/public-types";

// Data before hierarchy
// ORIGINAL LIBERARY DATA

// export function initTasks() {
//   const currentDate = new Date();
//   const tasks: Task[] = [
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Some Project",
//       id: "ProjectSample",
//       progress: 25,
//       type: "project",
//       hideChildren: false,
//       displayOrder: 1,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth(),
//         2,
//         12,
//         28
//       ),
//       name: "Idea",
//       id: "Task 0",
//       progress: 45,
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 2,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//       name: "Research",
//       id: "Task 1",
//       progress: 25,
//       dependencies: ["Task 0"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 3,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
//       name: "Discussion with team",
//       id: "Task 2",
//       progress: 10,
//       dependencies: ["Task 1"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 4,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
//       name: "Developing",
//       id: "Task 3",
//       progress: 2,
//       dependencies: ["Task 2"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 5,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       name: "Review",
//       id: "Task 4",
//       type: "task",
//       progress: 70,
//       dependencies: ["Task 2"],
//       project: "ProjectSample",
//       displayOrder: 6,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Release",
//       id: "Task 6",
//       progress: currentDate.getMonth(),
//       type: "milestone",
//       dependencies: ["Task 4"],
//       project: "ProjectSample",
//       displayOrder: 7,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
//       name: "Party Time",
//       id: "Task 9",
//       progress: 0,
//       isDisabled: true,
//       type: "task",
//     },
//   ];
//   return tasks;
// }

// DUMMY DATA WITHOUT HIERARCHY

// export function initTasks() {
//   const currentDate = new Date();
//   const tasks: Task[] = [
//     // Project 1
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Project Alpha",
//       id: "ProjectAlpha",
//       progress: 10,
//       type: "project",
//       hideChildren: false,
//       displayOrder: 1,
//       isDisabled: true,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth(),
//         3,
//         12,
//         0
//       ),
//       name: "Requirement Gathering",
//       id: "TaskA1",
//       progress: 30,
//       type: "subproject",
//       hideChildren: false,
//       // project: "ProjectAlpha",
//       displayOrder: 2,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       name: "Development Phase 1",
//       id: "TaskA2",
//       progress: 50,
//       // dependencies: ["TaskA1"],
//       type: "task",
//       project: "ProjectAlpha",
//       displayOrder: 3,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       name: "Development Phase 2",
//       id: "TaskA3",
//       progress: 50,
//       dependencies: ["TaskA2"],
//       type: "task",
//       project: "ProjectAlpha",
//       displayOrder: 4,
//     },

//     // Project 2
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
//       name: "Project Beta",
//       id: "ProjectBeta",
//       progress: 20,
//       type: "project",
//       hideChildren: false,
//       displayOrder: 4,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
//       name: "Initial Planning",
//       id: "TaskB1",
//       progress: 20,
//       type: "task",
//       project: "ProjectBeta",
//       displayOrder: 5,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
//       name: "Execution Phase",
//       id: "TaskB2",
//       progress: 10,
//       dependencies: ["TaskB1"],
//       type: "task",
//       project: "ProjectBeta",
//       displayOrder: 6,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Final Review",
//       id: "TaskB3",
//       progress: 0,
//       type: "milestone",
//       dependencies: ["TaskB2"],
//       project: "ProjectBeta",
//       displayOrder: 7,
//     },
//   ];

//   return tasks;
// }

// DUMMY DATA WITH HEIRARCHY
// export function initTasks() {
//   const currentDate = new Date();
//   const tasks: Task[] = [
//     // Main Project
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
//       name: "Task Application",
//       id: "MainProject",
//       progress: 20,
//       type: "project",
//       hideChildren: false, // Collapsibility for the main project
//       displayOrder: 1,
//     },
//     // Nested Project: Frontend
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Frontend Development",
//       id: "Frontend",
//       progress: 40,
//       type: "project",
//       parent: "MainProject", // Nested under "MainProject"
//       hideChildren: false, // Collapsibility for this nested project
//       displayOrder: 2,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
//       name: "UI Design",
//       id: "Task1",
//       progress: 50,
//       type: "task",
//       project: "Frontend", // Task under "Frontend"
//       displayOrder: 3,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
//       name: "Component Development",
//       id: "Task2",
//       progress: 30,
//       dependencies: ["Task1"],
//       type: "task",
//       project: "Frontend",
//       displayOrder: 4,
//     },
//     // Nested Project: Backend
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 20),
//       name: "Backend Development",
//       id: "Backend",
//       progress: 25,
//       type: "project",
//       parent: "MainProject", // Nested under "MainProject"
//       hideChildren: false,
//       displayOrder: 5,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       name: "Database Design",
//       id: "Task3",
//       progress: 20,
//       type: "task",
//       project: "Backend", // Task under "Backend"
//       displayOrder: 6,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
//       name: "API Development",
//       id: "Task4",
//       progress: 15,
//       dependencies: ["Task3"],
//       type: "task",
//       project: "Backend",
//       displayOrder: 7,
//     },
//     // Another Nested Project: Microservices
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
//       name: "Microservices",
//       id: "Microservices",
//       progress: 10,
//       type: "project",
//       parent: "MainProject", // Nested under "MainProject"
//       hideChildren: true,
//       displayOrder: 8,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 11),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
//       name: "Service Implementation",
//       id: "Task5",
//       progress: 5,
//       type: "task",
//       project: "Microservices", // Task under "Microservices"
//       displayOrder: 9,
//     },
//   ];

//   return tasks;
// }

//data for hierarchy test

export function initTasks() {
  const currentDate = new Date();
  const projects: Project[] = [
    {
      id: "MainConstructionProject",
      name: "Main Construction Project",
      type: "project",
      progress: 15,
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
      hideChildren: false,
      displayOrder: 1,
      subprojects: [
        {
          id: "HousePlanA",
          name: "House Plan A",
          type: "subproject",
          progress: 40,
          project: "MainConstructionProject",
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          hideChildren: false,
          displayOrder: 2,
          tasks: [
            {
              id: "FoundationWorkA",
              name: "Foundation Work",
              type: "task",
              progress: 50,
              project: "HousePlanA",
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                5
              ),
              displayOrder: 3,
            },
            {
              id: "FramingA",
              name: "Framing",
              type: "task",
              progress: 30,
              project: "HousePlanA",
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                6
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                10
              ),
              displayOrder: 4,
            },
            {
              id: "InspectionA",
              name: "Inspection Milestone",
              type: "milestone",
              progress: 0,
              project: "HousePlanA",
              dependencies: ["FoundationWorkA", "FramingA"],
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                12
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                12
              ),
              isDisabled: false,
              displayOrder: 5,
            },
          ],
        },
        {
          id: "HousePlanB",
          name: "House Plan B",
          type: "subproject",
          progress: 20,
          project: "MainConstructionProject",
          start: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            16
          ),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
          hideChildren: false,
          displayOrder: 6,
          tasks: [
            {
              id: "FoundationWorkB",
              name: "Foundation Work",
              type: "task",
              progress: 10,
              project: "HousePlanB",
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                16
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                20
              ),
              displayOrder: 7,
            },
            {
              id: "FramingB",
              name: "Framing",
              type: "task",
              progress: 0,
              project: "HousePlanB",
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                21
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                25
              ),
              displayOrder: 8,
            },
            {
              id: "InspectionB",
              name: "Inspection Milestone",
              type: "milestone",
              progress: 0,
              project: "HousePlanB",
              dependencies: ["FoundationWorkB", "FramingB"],
              start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                28
              ),
              end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                28
              ),
              isDisabled: false,
              displayOrder: 9,
            },
          ],
        },
      ],
    },
  ];

  // Flatten tasks from nested structure
  const allTasks = flattenTasks(projects);

  // Filter out hidden tasks
  const visibleTasks = removeHiddenTasks(allTasks);

  // Return the final tasks if needed
  return visibleTasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
