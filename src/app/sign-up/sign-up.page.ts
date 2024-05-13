import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignupPage implements OnInit {
  public email: any;
  public password: any;
  public name: any;

  constructor(
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.fireService.signup({ email: this.email, password: this.password }).then(res => {
      if (res && res.user && res.user.uid) { // Add null/undefined check
        let data = {
          email: this.email,
          password: this.password,
          name: this.name,
          uid: res.user.uid
        };
        this.fireService.saveDetails(data).then(res => {
          alert('Account Created!');
        }, err => {
          console.log(err);
        });
      }
    }, err => {
      alert(err.message);
      console.log(err);
    });
  }
}
