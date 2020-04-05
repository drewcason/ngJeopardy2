import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Question } from 'src/app/question.interface';
import { ModalComponent } from '../modal/modal.component';
import { JeopardyService } from 'src/app/jeopardy.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
  @Output() questionValue = new EventEmitter<number>();
  @Input() selectedTeam;
  @Input() allTeams;
  questions: Question[];
  categories;
  selectedQuestion: Question;
  questionMap: Map<number, Question>;
  showModal: boolean;
  showDouble: boolean;
  showFinal: boolean;
  questionIndex: number;
  finalCategory: string;
  finalQuestion: Question;

  constructor(private jeopardyService: JeopardyService) {
  }

  getQuestions() {
    this.jeopardyService.getJeopardyQuestions().subscribe((response) => {
      this.categories = response.shift();
      this.questionMap = this.setMap(response);
    });
  }

  getDoubleJeopardyQuestions() {
    this.jeopardyService.getDoubleJeopardyQuestions().subscribe((response) => {
      this.categories = response.shift();
      this.questionMap = this.setMap(response);
    });
  }

  getFinalJeopardyQuestion() {
    this.showFinal = true;
    this.jeopardyService.getFinalJeopardy().subscribe((response) => {
      this.finalCategory = response.shift();
      this.questionMap = this.setMap(response);
      this.finalQuestion = this.questionMap.get(0);
    });
  }

  ngOnInit(): void {
  }

  setMap(questions: Question[]): Map<number, Question> {
    const map = new Map();
    questions.forEach((Q: Question, index: number) => {
      map.set(index, Q);
    });
    return map;
  }

  openQuestion(index: number) {
    this.questionIndex = index;
    this.selectedQuestion = this.questionMap.get(index);
    if (this.selectedQuestion.dailyDouble) {
      this.showDouble = true;
    } else {
      this.questionValue.emit(this.selectedQuestion.value);
      this.showModal = true;
      this.modal.startTimer();
    }
  }

  closeModal(index: number) {
    this.questionMap.set(index, { ...this.selectedQuestion, answered: true });
    this.showModal = false;
    this.questionIndex = null;
    this.selectedQuestion = null;
  }

  makeWager(wager: string) {
    this.showDouble = false;
    this.questionValue.emit(parseInt(wager, 10));
    this.showModal = true;
    this.modal.startTimer();
  }

  makeFinalWager(wager: string) {
    this.questionValue.emit(parseInt(wager, 10));
  }
}
