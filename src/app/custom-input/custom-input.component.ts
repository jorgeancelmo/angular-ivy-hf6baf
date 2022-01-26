import {
  Component,
  OnInit,
  forwardRef,
  HostBinding,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template: '<input [(ngModel)]="value"/>local: {{val}}',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor  {
  constructor() {}

  ngOnInit() {}
  onChange: any = () => {};
  onTouch: any = () => {};
  val = ''; // este é o valor atualizado que a classe acessa
  set value(val) {
    // este valor é atualizado por alterações programáticas if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
