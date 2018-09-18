import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  goSignup = SignupPage;
  goLogin = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
