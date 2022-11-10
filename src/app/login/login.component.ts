import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enter(): void {
    let user = {
      username: "OBLOMOV",
      firstname: "Миша",
      surname: "Чилая"
    }
    let user_str = JSON.stringify(user);

    localStorage.setItem("user", user_str);
  }
}
