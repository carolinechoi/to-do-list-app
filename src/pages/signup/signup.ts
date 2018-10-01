import { Component, OnInit } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';

//Firebase imports
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//Model import
import { User } from '../../models/user.interface';

//Pages import
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{
  
  newUser = {} as User;
  newUserRef$: AngularFireList<User[]>;

  constructor(private toast: ToastController, 
    private db: AngularFireDatabase, 
    private afauth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  ngOnInit() {
    this.newUserRef$ = this.db.list('users');
  }

  async addUser(newUser: User) {
    try {
      const result = await this.afauth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
      console.log(result);
      if (result) {
        this.navCtrl.setRoot(HomePage);
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
