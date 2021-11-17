import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fifth-field-form-service',
  templateUrl: './fifth-field-form-service.component.html',
  styleUrls: ['./fifth-field-form-service.component.css']
})
export class FifthFieldFormServiceComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() thirdFieldLabel: string = '';
  @Input() fourthFieldLabel: string = '';
  @Input() fifthFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'number';
  @Input() thirdType: string = 'text';
  @Input() fourthType: string = 'text';
  @Input() fifthType: string = 'number';
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
