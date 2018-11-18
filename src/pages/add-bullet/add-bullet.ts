import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firebase imports
import * as firebase from "firebase";
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
export class AddBulletPage implements OnInit{

  bullet = {} as bullet;
  newBulletRef$: AngularFireList<bullet>;
  selectedItem: any;
  path: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.selectedItem = navParams.get('selectedItem');
      this.afAuth.authState.subscribe(data => {        
        this.newBulletRef$ = this.db.list(data.uid+'/listItemsof-/'+this.selectedItem.name);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBulletPage');
  }

  ngOnInit(){
    //method .take() does not work on authState, also unnecessary 
  }

  createBullet(bullet: bullet) {
    this.newBulletRef$.push({
      description: this.bullet.description,
      checked: false
    })
    this.navCtrl.pop();
  }

}
