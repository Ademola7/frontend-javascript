// ------------------------------
// Type predicate to check if employee is a Director
// ------------------------------
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ------------------------------
// Execute work based on employee type
// ------------------------------
export function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// ------------------------------
// Example usage
// ------------------------------
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
