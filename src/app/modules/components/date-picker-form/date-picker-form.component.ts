import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Hour {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-date-picker-form',
  templateUrl: './date-picker-form.component.html',
  styleUrls: ['./date-picker-form.component.css']
})
export class DatePickerFormComponent implements OnInit {

  hours: Hour[] = [
    {value: '09:00:00', viewValue: '09:00 - 11:00'},
    {value: '11:00:00', viewValue: '11:00 - 12:00'},
    {value: '12:00:00', viewValue: '12:00 - 14:00'},
    {value: '14:00:00', viewValue: '14:00 - 15:00'},
    {value: '15:00:00', viewValue: '15:00 - 17:00'},
    {value: '17:00:00', viewValue: '17:00 - 18:00'},
    {value: '18:00:00', viewValue: '18:00 - 20:00'},
    {value: '20:00:00', viewValue: '20:00 - 21:00'},
  ];

  @Input() firstFieldValue: string = '';
  @Input() secondFieldValue: string = '';
  @Input() thirdFieldLabel: string = '';
  @Input() fourthFieldLabel: string = '';
  @Input() thirdType: string = 'date';
  @Input() leftBtnLabel: string = 'Cancelar';
  @Input() rightBtnLabel: string = 'Aceptar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string,  thirdInput:string) {
    this.press.emit({
      button: btn,
      thirdField: thirdInput,

    })
  }

  submitHandler(event: any, btn: string, thirdInput:string) {
    event.preventDefault();
    this.pressHandler(btn, thirdInput);
  }

}
