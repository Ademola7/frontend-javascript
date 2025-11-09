// task_5/js/main.ts

// ------------------------------
// 1. Define branded interfaces
// ------------------------------

export interface MajorCredits {
  credits: number;
  readonly brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  readonly brand: "MinorCredits";
}

// ------------------------------
// 2. Functions to sum credits
// ------------------------------

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// ------------------------------
// 3. Example usage
// ------------------------------

const major1: MajorCredits = { credits: 10, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 15, brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 5, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 8, brand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2)); // { credits: 25, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 13, brand: 'MinorCredits' }
