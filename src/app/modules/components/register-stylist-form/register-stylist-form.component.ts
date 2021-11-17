import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-stylist-form',
  templateUrl: './register-stylist-form.component.html',
  styleUrls: ['./register-stylist-form.component.css']
})
export class RegisterStylistFormComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() thirdFieldLabel: string = '';
  @Input() fourthFieldLabel: string = '';
  @Input() fifthFieldLabel: string = '';
  @Input() sixthFieldLabel: string = '';
  @Input() seventhFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'text';
  @Input() thirdType: string = 'text';
  @Input() fourthType: string = 'tel';
  @Input() fifthType: string = 'text';
  @Input() sixthType: string = 'text';
  @Input() seventhType: string = 'password';
  @Input() leftBtnLabel: string = 'Cancelar';
  @Input() rightBtnLabel: string = 'Aceptar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string, fifthInput:string, sixthInput:string, seventhInput:string) {
    this.press.emit({
      button: btn,
      firstField: firstInput,
      secondField: secondInput,
      thirdField: thirdInput,
      fourthField: fourthInput,
      fifthField: fifthInput,
      sixthField: sixthInput,
      seventhField: seventhInput
    })
  }

  submitHandler(event: any, btn: string, firstInput: string, secondInput: string, thirdInput:string, fourthInput:string, fifthInput:string, sixthInput:string, seventhInput:string) {
    event.preventDefault();
    this.pressHandler(btn, firstInput, secondInput, thirdInput, fourthInput, fifthInput, sixthInput, seventhInput);
  }
}
