import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBulletPage } from './add-bullet';

@NgModule({
  declarations: [
    AddBulletPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBulletPage),
  ],
})
export class AddBulletPageModule {}
