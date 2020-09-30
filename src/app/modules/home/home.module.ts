import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NzBreadCrumbModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    FormsModule
  ]
})
export class HomeModule { }
