import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkScheduleDetailPage } from './work-schedule-detail';

@NgModule({
  declarations: [
    WorkScheduleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkScheduleDetailPage),
  ],
})
export class WorkScheduleDetailPageModule {}
