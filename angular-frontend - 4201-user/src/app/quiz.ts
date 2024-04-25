import { Question } from "./question";

export class Quiz {
    id: number;
    title: string;
    marksScored: number;
    difficulty: string;
    timeLimit: number;
    rewardPoints: number;
    questions : Question[] = [new Question()];
}
  