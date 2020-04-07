import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Jeopardy } from './roundOneQuestions';
import { DoubleJeopardy } from './roundTwoQuestions';
import { FinalJeopardy } from './finalQuestion';
import { Teams } from './teams';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const roundOneQuestions = Jeopardy;
    const roundTwoQuestions = DoubleJeopardy;
    const finalJeopardy = FinalJeopardy;
    const teams = Teams;
    return {roundOneQuestions, roundTwoQuestions, finalJeopardy, teams};
  }
}
