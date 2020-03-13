import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: '';
  @Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const {dirty, touched, errors } = this.control;
    //return this.control.dirty && this.control.touched && this.control.errors;
    return dirty && touched && errors;
  }
}
