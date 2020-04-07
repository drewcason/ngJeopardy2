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
  constructor(
    private http: HttpClient
  ) {

  }
  getJeopardyQuestions(): Observable<any> {
    return this.http.get('api/roundOneQuestions');
  }

  getDoubleJeopardyQuestions(): Observable<any> {
    return this.http.get('api/roundTwoQuestions');
  }

  getFinalJeopardy(): Observable<any> {
    return this.http.get('api/finalJeopardy');
  }

  getTeams(): Observable<string[]> {
    return this.http.get<string[]>('api/teams');
  }
}
