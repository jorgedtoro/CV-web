import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      mail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  async getDataForm(): Promise<void> {
    let user = this.userForm.value;
    console.log(user);
  }
}
