import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditComponent} from './edit/edit.component';
import {
  NzButtonModule,
  NzDatePickerModule,
  NzDrawerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzSelectModule,
  NzSpinModule
} from 'ng-zorro-antd';
import {NzModalService} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzButtonModule,
    NzFormModule,
  ],
  providers:[NzModalService]
})
export class RegisterModule { }
