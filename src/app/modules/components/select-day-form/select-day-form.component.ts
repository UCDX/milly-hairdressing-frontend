import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-day-form',
  templateUrl: './select-day-form.component.html',
  styleUrls: ['./select-day-form.component.css']
})
export class SelectDayFormComponent implements OnInit {

  @Input() dayFieldLabel: string = '';
  @Input() dayType: string = 'date';
  @Input() rightBtnLabel: string = 'Buscar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string, dayInput: string) {
    this.press.emit({
      button: btn,
      dayField: dayInput
    })
  }

  submitHandler(event: any, btn: string, dayInput: string) {
    event.preventDefault();
    this.pressHandler(btn, dayInput);
  }
}
