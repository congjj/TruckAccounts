import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule
  ]
})
export class LoginModule { }
