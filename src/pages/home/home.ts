import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AddListPage } from '../add-list/add-list';

//Firebase imports
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Observable
import { Observable } from 'rxjs';
import { list } from '../../models/list.interface';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goNew = AddListPage;

  list = {} as list;
  listRef: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
        this.listRef = this.db.list(data.uid+'/lists').valueChanges();
    })
  }
}
