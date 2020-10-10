import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import {NzButtonModule, NzDatePickerModule, NzFormModule, NzGridModule, NzInputModule, NzSelectModule, NzSpinModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class TruckAccountModule { }
