import { Component } from '@angular/core';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private patternValidator: ValidatorFn = Validators.pattern(/^[0-9]{2}-[0-9]{3}$/);

  checkboxControl: FormControl = new FormControl(false);
  postCodeControl: FormControl = new FormControl(null, [Validators.required, this.patternValidator])

  constructor() {
    this.checkboxControl.valueChanges.subscribe((value: boolean) => {
      if(value) {
        this.postCodeControl.clearValidators();
        this.postCodeControl.setValidators(this.patternValidator);
        // would look better: this.postCodeControl.clearValidator(Validators.required);
      } else {
        this.postCodeControl.setValidators(Validators.required);
      }
      this.postCodeControl.updateValueAndValidity();
    })
  }
}
