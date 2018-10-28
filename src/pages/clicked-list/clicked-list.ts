import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClickedListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clicked-list',
  templateUrl: 'clicked-list.html',
})
export class ClickedListPage {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickedListPage');
  }

}
