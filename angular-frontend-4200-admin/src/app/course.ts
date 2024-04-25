import { Quiz } from "./quiz";
export class Course {
    id: number;
    title: string;
    instructor: string;
    courseMaterial: string;
    courseOutcome: string;
    // image!: File;
    quizs: Quiz[] = [new Quiz()];
}
