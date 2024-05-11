
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  username: string = '';
  password: string = ''; // Initialize password here

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/main']);
    } else {
      this.presentAlert('Invalid Credentials', 'Please check your username and password.');
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  goBack() {
    this.router.navigate(['/home']);
  }
  
  signUp() {
    this.router.navigate(['/SignUp']);
  }
  Login() {
    // FOR DEFAULT
    this.router.navigate(['/main']);
  }
}
