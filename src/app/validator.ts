import {
  ValidatorFn,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

export const RequiredIfCheckedValidator: (
  controlName: string,
  checkboxName: string
) => ValidatorFn = (controlName: string, checkboxName: string) => {
  return (group: FormGroup) => {
    const control = group.get(controlName);
    const checkbox = group.get(checkboxName);

    if (!checkbox.value) {
      const error = Validators.required(control);
      control.setErrors(error);
    } else {
      control.setErrors(null);
    }

    return null;
  };
};
