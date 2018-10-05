import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firebase imports
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//Model import
import { list } from '../../models/list.interface';

//Pages import
import { HomePage } from '../home/home';
import { Observable } from 'rxjs';

import { take } from 'rxjs-compat/operator/take';

@IonicPage()
@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage implements OnInit{

  list = {} as list;
  newListRef$: AngularFireList<list>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit(){
    //method .take() does not work on authState, also unnecessary 
    this.afAuth.authState.subscribe(auth => {
      this.newListRef$ = this.db.list(auth.uid+'/lists');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }
  
  createNewList1(list: list) {
      this.newListRef$.push({
        name: this.list.name,
        color: this.list.color
      });
      this.navCtrl.push(HomePage);
    }
  
}
