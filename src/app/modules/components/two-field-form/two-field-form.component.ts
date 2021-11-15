import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-field-form',
  templateUrl: './two-field-form.component.html',
  styleUrls: ['./two-field-form.component.css']
})
export class TwoFieldFormComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'password';
  @Input() leftBtnLabel: string = 'Cancelar';
  @Input() rightBtnLabel: string = 'Aceptar';

  @Output() press: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressHandler(btn: string, firstInput: string, secondInput: string) {
    this.press.emit({
      button: btn,
      firstField: firstInput,
      secondField: secondInput
    })
  }

  submitHandler(event: any, btn: string, firstInput: string, secondInput: string) {
    event.preventDefault();
    this.pressHandler(btn, firstInput, secondInput);
  }

}
