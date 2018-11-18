import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBulletPage } from '../add-bullet/add-bullet';

//Firebase imports
import * as firebase from "firebase";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Observable
import { Observable } from 'rxjs';
import { bullet } from '../../models/bullet.interface';

@IonicPage()
@Component({
  selector: 'page-clicked-list',
  templateUrl: 'clicked-list.html',
})
export class ClickedListPage {

  bullet = {} as bullet;
  newCheck:AngularFireList<bullet>;
  cucumber: boolean;

  selectedItem: any;
  selectedColor: string;

  bulletRef: Observable<any[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,) {
    this.selectedItem = navParams.get('list');
    this.selectedColor = navParams.get('list.color');
    this.afAuth.authState.subscribe(data => {
      this.bulletRef = this.db.list(data.uid+'/listItemsof-/'+this.selectedItem.name).valueChanges();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickedListPage');
  }

  ionViewWillLoad(){

  }

  itemTapped(event, selectedItem){
    this.navCtrl.push(AddBulletPage, {
      selectedItem: selectedItem
    });
  }

  updateCucumber($key){
    console.log($key);
    this.selectedItem = this.navParams.get('list');

    this.afAuth.authState.subscribe(data => {
      this.selectedItem = this.navParams.get('list');
      var usersRef = firebase.database().ref(data.uid+'/listItemsof-/'+this.selectedItem.name);
      var ref = usersRef.orderByChild('description').equalTo($key.description);      
      var select = this.selectedItem.name;
      var boolean = $key.checked;

      ref.once('value').then(function(snap){
        snap.forEach(function (childSnap) {
          var pkey = childSnap.key;
          if (boolean==false){
          firebase.database().ref(data.uid+'/listItemsof-/'+select+'/'+pkey).child("checked").set(false);
          console.log('changed state to false');
          } if (boolean == true) {
            firebase.database().ref(data.uid+'/listItemsof-/'+select+'/'+pkey).child("checked").set(true);
            console.log('changed state to true');
          }
        })
      }); 
    });

  }

}
