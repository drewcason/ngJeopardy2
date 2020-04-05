import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() selectedTeam;
  selectedID: number;
  @Input() teams = [
    {
      name: 'Flonkerton',
      score: 0,
      id: 0
    }, {
      name: 'Finer Things',
      score: 0,
      id: 1
    }, {
      name: 'Athlead',
      score: 0,
      id: 2
    }, {
      name: 'Inner Circle',
      score: 0,
      id: 3
    }, {
      name: 'Serenity by Jan',
      score: 0,
      id: 4
    }
  ];
  @Input() questionValue: number;
  @Input() finalCategory;
  @Input() finalQuestion;
  @Output() answer = new EventEmitter<boolean>();
  @Output() team = new EventEmitter<any>();
  @Output() allTeams = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  sortByScore() {
    return this.teams.sort((a, b) => b.score - a.score);
  }

  addScore(score: number, correct: boolean) {
    this.answer.emit(correct);
    this.selectedTeam.score += score;
    this.teams = [ ...this.teams, ...this.selectedTeam ];
  }

  setSelectedTeam(id: number) {
    this.selectedID = id;
    this.selectedTeam = this.teams.find(team => team.id === id);
    this.team.emit(this.selectedTeam);
    this.allTeams.emit(this.teams);
  }
}
