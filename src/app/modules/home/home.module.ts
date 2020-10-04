import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import {
  NzBreadCrumbModule,
  NzButtonModule, NzDatePickerModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule, NzSelectModule,
  NzTableModule
} from 'ng-zorro-antd';

import {RegisterModule} from '../../components/users/register/register.module';
import { NzDrawerModule } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from '../../components/users/register/register.component';

@NgModule({
  declarations: [HomeComponent,RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDrawerModule,
    RegisterModule
  ],
  providers:[]
})
export class HomeModule { }
