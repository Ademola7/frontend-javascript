import { Subjects } from "./Subject";
import { Subjects as TeacherNS } from "./Teacher";

export namespace Subjects {
  // Declaration merging: extend Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher &&
        this.teacher.experienceTeachingC &&
        this.teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
