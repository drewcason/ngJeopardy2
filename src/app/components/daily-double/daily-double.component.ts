import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-daily-double',
  templateUrl: './daily-double.component.html',
  styleUrls: ['./daily-double.component.scss']
})
export class DailyDoubleComponent implements OnInit {
  wager;
  wagerForm: FormGroup;
  @Input() visible: boolean;
  @Output() bet = new EventEmitter<string>();
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.bet.emit(this.wager);
    this.wager = '';
  }

  onEnter(value: string) {
    this.wager = value;
    this.bet.emit(this.wager);
    this.wager = '';
  }
}
