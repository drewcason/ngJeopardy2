import { Component, OnInit, Output, Input } from '@angular/core';
import { Question } from 'src/app/question.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() question: Question;
  @Input() visible: boolean;
  showAnswer = false;
  @Output() goAway = new EventEmitter();
  timer: any;
  timeLeft = 15;
  paused: boolean;
  outOfTime = false;
  constructor() { }

  ngOnInit(): void {
  }

  setAnswerVisibility(state: boolean): void {
    this.showAnswer = state;
    this.pauseTimer();
  }

  closeModal(): void {
    this.goAway.emit(null);
    this.setAnswerVisibility(false);
  }

  startTimer() {
    this.reset();
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
        this.outOfTime = true;
      }
    }, 1000);
  }

  reset() {
    this.paused = false;
    this.timeLeft = 15;
    this.outOfTime = false;
  }
  pauseTimer() {
    this.paused = true;
    clearInterval(this.timer);
  }

  setWrongAnswer() {
    this.pauseTimer();
    this.outOfTime = true;
    this.setTimerForWrongAnswer();
  }

  setTimerForWrongAnswer() {
    setTimeout(() => {
      this.startTimer();
    }, Math.floor(Math.random() * 3000) + 3000);
  }
}
