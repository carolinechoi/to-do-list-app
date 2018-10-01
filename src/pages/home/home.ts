import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list';

//Firebase imports
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Observable
import { Observable } from 'rxjs';
import { list } from '../../models/list.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  goNew = AddListPage;

  list = {} as list;
  listRef$: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
  }

  ngOnInit(){

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.listRef$ = this.db.list('list/'+data.uid).valueChanges();
      } else {
      }
    })
  }
}
