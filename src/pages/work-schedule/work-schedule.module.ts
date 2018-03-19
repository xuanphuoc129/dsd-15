import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkSchedulePage } from './work-schedule';

@NgModule({
  declarations: [
    WorkSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkSchedulePage),
  ],
})
export class WorkSchedulePageModule {}
