import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    teacher: Teacher | null = null;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
