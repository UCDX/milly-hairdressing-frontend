import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker-form',
  templateUrl: './date-picker-form.component.html',
  styleUrls: ['./date-picker-form.component.css']
})
export class DatePickerFormComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() thirdFieldLabel: string = '';
  @Input() fourthFieldLabel: string = '';
  @Input() fifthFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'text';
  @Input() thirdType: string = 'date';
  @Input() fourthType: string = 'text';
  @Input() leftBtnLabel: string = 'Cancelar';
  @Input() rightBtnLabel: string = 'Aceptar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string) {
    this.press.emit({
      button: btn,
      firstField: firstInput,
      secondField: secondInput,
      thirdField: thirdInput,
      fourthField: fourthInput,

    })
  }

  submitHandler(event: any, btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string) {
    event.preventDefault();
    this.pressHandler(btn, firstInput, secondInput, thirdInput, fourthInput);
  }

}
