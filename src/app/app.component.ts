import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  ValidatorFn,
  FormGroup
} from "@angular/forms";
import { RequiredIfCheckedValidator } from "./validator";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private patternValidator: ValidatorFn = Validators.pattern(
    /^[0-9]{2}-[0-9]{3}$/
  );

  group: FormGroup = new FormGroup({
    postCode: new FormControl(null, [this.patternValidator]),
    checkbox: new FormControl(false)
  }, RequiredIfCheckedValidator('postCode', 'checkbox'));

  constructor() {}
}
