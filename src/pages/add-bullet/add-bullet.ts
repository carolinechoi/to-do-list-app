import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firebase imports
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

//Model import
import { bullet } from '../../models/bullet.interface';

//Pages import
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-bullet',
  templateUrl: 'add-bullet.html',
})
export class AddBulletPage {

  newBullet = {} as bullet;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBulletPage');
  }

  createNewList(){
    this.afAuth.authState.subscribe(auth => {
      this.db.object(`list/${auth.uid}/`).set(this.newBullet).then(() => this.navCtrl.setRoot(HomePage));
    })
  }

}
