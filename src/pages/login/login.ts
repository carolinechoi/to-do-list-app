import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

//Firebase imports
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
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
    private db: AngularFireDatabase,
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
      } 
      else {}
    }
    catch(e) {
      this.toast.create({
        message: "Incorrect password or email! Possibly: "+e,
        duration: 4000
      }).present();
    }
  }
}
