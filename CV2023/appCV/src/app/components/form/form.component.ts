import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private emailService: EmailService) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      comments: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit(): void {}

  getDataForm(): any {
    let user = this.userForm.value;
    console.log(user);
    // debugger;
    // this.emailService.sendMessage(user).subscribe(() => {
    //   console.log('Mensaje enviado');
    // });
    this.emailService.sendMessage(user);
  }
}
