import { Subjects } from "./subjects/Cpp";
import { Subjects as JavaNS } from "./subjects/Java";
import { Subjects as ReactNS } from "./subjects/React";
import { Subjects as TeacherNS } from "./subjects/Teacher";

// Create teacher object
export const cTeacher: TeacherNS.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

// Create subjects
export const cpp = new Subjects.Cpp();
export const java = new JavaNS.Java();
export const react = new ReactNS.React();

// C++ example
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java example
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React example
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
