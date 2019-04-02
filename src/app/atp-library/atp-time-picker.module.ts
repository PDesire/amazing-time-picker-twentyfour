import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { AtpTimePickerComponent } from './atp-time-picker/atp-time-picker.component';
import { AmazingTimePickerServiceTwentyfour } from './atp-time-picker.service';
import { AtpDirective } from './atp.directive';
import { AtpCoreService } from './atp-core.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimePickerComponent,
    AtpTimePickerComponent,
    AtpDirective
  ],
  providers: [
    AmazingTimePickerServiceTwentyfour,
    AtpCoreService
  ],
  entryComponents: [TimePickerComponent],
  exports: [
    TimePickerComponent,
    AtpTimePickerComponent,
    AtpDirective
  ]
})
export class AmazingTimePickerModuleTwentyfour { }
