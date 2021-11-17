import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-field-form-service',
  templateUrl: './two-field-form-service.component.html',
  styleUrls: ['./two-field-form-service.component.css']
})
export class TwoFieldFormServiceComponent implements OnInit {

  @Input() firstFieldLabel: string = '';
  @Input() secondFieldLabel: string = '';
  @Input() firstType: string = 'text';
  @Input() secondType: string = 'number';
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
