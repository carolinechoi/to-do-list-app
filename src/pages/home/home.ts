import { Component } from '@angular/core';
import { NavController, PopoverController, ActionSheetController } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list';

//Firebase imports
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Observable
import { Observable } from 'rxjs';
import { list } from '../../models/list.interface';
import { ClickedListPage } from '../clicked-list/clicked-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;

  goNew = AddListPage;

  list = {} as list;
  listRef: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public popoverCtrl: PopoverController) {
  }

  itemTapped(event, list) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ClickedListPage, {
      list: list
    });
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
        this.listRef = this.db.list(data.uid+'/lists').valueChanges();
    })
  }
}
