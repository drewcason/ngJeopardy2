import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jeopardy } from './roundOneQuestions';
import { DoubleJeopardy } from './roundTwoQuestions';
import { FinalJeopardy } from './finalQuestion';

@Injectable({
  providedIn: 'root'
})
export class JeopardyService {
  getJeopardyQuestions(): Observable<any> {
    return of([...Jeopardy]);
  }

  getDoubleJeopardyQuestions(): Observable<any> {
    return of([...DoubleJeopardy]);
  }

  getFinalJeopardy(): Observable<any> {
    return of(FinalJeopardy);
  }
}
