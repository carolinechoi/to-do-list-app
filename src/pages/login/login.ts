import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

//Firebase imports
import { AngularFireAuth } from '@angular/fire/auth';

//Model import
import { User } from '../../models/user.interface';

//Page import 
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  oldUser = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(oldUser: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(oldUser.email, oldUser.password);
      if (result) {
        this.navCtrl.setRoot(HomePage);
        console.log('pushed to HomePage');
        this.toast.create({
          message: `We're all given the same hours in a day. Are you ready to maximise yours?`,
          duration: 3000
        }).present();
      } 
    }
    catch(e) {
      this.toast.create({
        message:   `Let's try again: ` + `${e}`.substr(7),
        duration: 2000
      }).present();
    }
  }
}
