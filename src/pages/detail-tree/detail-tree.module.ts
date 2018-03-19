import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTreePage } from './detail-tree';

@NgModule({
  declarations: [
    DetailTreePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTreePage),
  ],
})
export class DetailTreePageModule {}
