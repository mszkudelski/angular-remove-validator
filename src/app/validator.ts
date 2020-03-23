import {
  ValidatorFn,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

export const RequiredIfCheckedValidator: (
  controlName: string,
  checkboxName: string
) => ValidatorFn = (controlName: string, checkboxName: string) => {
  return (group: FormGroup) => {
    const control = group.get(controlName);
    const checkbox = group.get(checkboxName);

    const errors = control.validator(control);

    if (!checkbox.value) {
      const error = Validators.required(control);
      control.setErrors(
        control.invalid || error ? { ...error, ...errors } : null
      );
    } else {
      control.setErrors(control.invalid ? errors : null);
    }

    return null;
  };
};
