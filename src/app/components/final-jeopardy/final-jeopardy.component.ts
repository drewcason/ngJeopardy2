import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-final-jeopardy',
  templateUrl: './final-jeopardy.component.html',
  styleUrls: ['./final-jeopardy.component.scss']
})
export class FinalJeopardyComponent implements OnInit {
  @Input() finalQuestion;
  @Input() finalCategory: string;
  @Output() answer = new EventEmitter();
  @Input() visible;
  @Input() selectedTeam;
  @Input() teams;
  @Output() allTeams = new EventEmitter<any>();
  showTitle = true;
  @Output() bet = new EventEmitter<string>();
  showCategory: boolean;
  showQuestion: boolean;
  showScores: boolean;
  showfinalScores: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  category() {
    this.showTitle = false;
    this.showCategory = true;
  }

  question() {
    this.showCategory = false;
    this.showQuestion = true;
  }

  scoreboard() {
    this.showQuestion = false;
    this.showScores = true;
  }

  addScore(score: number, correct: boolean) {
    this.answer.emit(correct);
    this.teams = [ ...this.teams, ...{...this.selectedTeam, score: this.selectedTeam.score += score } ];
    this.allTeams.emit(this.teams);
  }

  onEnter(value: string) {
    this.bet.emit(value);
  }

  finalScores() {
    this.showScores = false;
    this.showfinalScores = true;
  }

  sortByScore() {
    return this.teams.sort((a, b) => b.score - a.score);
  }
}
