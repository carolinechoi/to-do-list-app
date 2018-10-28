import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickedListPage } from './clicked-list';

@NgModule({
  declarations: [
    ClickedListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClickedListPage),
  ],
})
export class ClickedListPageModule {}
