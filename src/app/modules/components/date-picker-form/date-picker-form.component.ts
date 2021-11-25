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
    {value: '0', viewValue: '9:00 a.m - 11:00 a.m'},
    {value: '1', viewValue: '11:00 a.m - 12:00 p.m'},
    {value: '2', viewValue: '12:00 p.m - 2:00 p.m'},
    {value: '3', viewValue: '2:00 p.m - 3:00 p.m'},
    {value: '4', viewValue: '3:00 p.m - 5:00 p.m'},
    {value: '5', viewValue: '5:00 p.m - 6:00 p.m'},
    {value: '6', viewValue: '6:00 p.m - 8:00 p.m'},
    {value: '7', viewValue: '8:00 p.m - 9:00 p.m'},
  ];

  @Input() firstFieldValue: string = 'D5424';
  @Input() secondFieldValue: string = 'Corte de pelo';
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
