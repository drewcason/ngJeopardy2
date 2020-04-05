import { Component, ViewChild } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jeopardy';
  questionValue: number;
  @ViewChild(GridComponent) grid: GridComponent;
  selectedTeam: any;
  allTeams: any;

  setQuestionValue(value: number) {
    this.questionValue = value;
  }

  handleAnswer(answer: boolean) {
    answer ? this.grid.modal.pauseTimer() : this.grid.modal.setWrongAnswer();
  }

  setSelectedTeam(team) {
    this.selectedTeam = team;
  }

  setTeams(teams) {
    this.allTeams = teams;
  }
}

