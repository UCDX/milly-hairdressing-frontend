import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fifth-field-form',
  templateUrl: './fifth-field-form.component.html',
  styleUrls: ['./fifth-field-form.component.css']
})
export class FifthFieldFormComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() thirdFieldLabel: string = '';
  @Input() fourthFieldLabel: string = '';
  @Input() fifthFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'text';
  @Input() thirdType: string = 'text';
  @Input() fourthType: string = 'tel';
  @Input() fifthType: string = 'password';
  @Input() leftBtnLabel: string = 'Cancelar';
  @Input() rightBtnLabel: string = 'Aceptar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string, fifthInput:string) {
    this.press.emit({
      button: btn,
      firstField: firstInput,
      secondField: secondInput,
      thirdField: thirdInput,
      fourthField: fourthInput,
      fifthField: fifthInput
    })
  }

  submitHandler(event: any, btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string, fifthInput:string) {
    event.preventDefault();
    this.pressHandler(btn, firstInput, secondInput, thirdInput, fourthInput, fifthInput);
  }

}
