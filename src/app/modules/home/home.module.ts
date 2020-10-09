import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import {
    NzBreadCrumbModule,
    NzButtonModule, NzDatePickerModule, NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule, NzPopconfirmModule, NzSelectModule,
    NzTableModule, NzTabsModule
} from 'ng-zorro-antd';

import {RegisterModule} from '../../components/users/register/register.module';
import { NzDrawerModule } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from '../../components/users/register/register.component';
import {TruckComponent} from '../../components/users/truck/truck.component';
import {TruckAccountComponent} from '../../components/accounts/truck-account/truck-account.component';
import {TruckAccountModule} from '../../components/accounts/truck-account/truck-account.module';


@NgModule({
  declarations: [HomeComponent,RegisterComponent,TruckComponent,TruckAccountComponent],
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
        RegisterModule,
        NzTabsModule,
        NzDividerModule,
        NzPopconfirmModule,
      TruckAccountModule
    ],
  providers:[]
})
export class HomeModule { }
