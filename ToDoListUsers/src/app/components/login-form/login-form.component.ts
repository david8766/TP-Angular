import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  form: any = {
    login: null,
    pass: null
  }
  
  users = [
    {
      id: 1,
      login: "David",
      role: "admin",
      password: "david"
    },
    {
      id: 2,
      login: "Marcel",
      role: "user",
      password: "marcel"
    },
    {
      id: 1,
      login: "Sophie",
      role: "user",
      password: "sophie"
    },
    {
      id: 1,
      login: "Elodie",
      role: "user",
      password: "elodie"
    },
    {
      id: 1,
      login: "Jean",
      role: "user",
      password: "jean"
    }

  ]

  onSubmit(): void {
    console.log(this.form);
  }
}
