import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  logOut() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
