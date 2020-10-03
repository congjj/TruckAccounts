import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NzBreadCrumbModule, NzIconModule, NzLayoutModule, NzMenuModule, NzTableModule} from 'ng-zorro-antd';
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
    NzTableModule
  ],
  providers:[]
})
export class HomeModule { }
