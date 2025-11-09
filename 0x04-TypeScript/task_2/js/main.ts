// ------------------------------
// Director and Teacher interfaces
// ------------------------------
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ------------------------------
// Director class
// ------------------------------
export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// ------------------------------
// Teacher class
// ------------------------------
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ------------------------------
// createEmployee function
// ------------------------------
export function createEmployee(salary: number | string): Director | Teacher {
  const numericSalary =
    typeof salary === "string" ? parseInt(salary, 10) : salary;
  if (numericSalary < 500) {
    return new Teacher();
  }
  return new Director();
}

// ------------------------------
// Type predicate for Director
// ------------------------------
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ------------------------------
// Execute work depending on employee type
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
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
