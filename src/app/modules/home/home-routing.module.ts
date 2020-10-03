import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {RegisterComponent} from '../../components/users/register/register.component';
import {CustomComponent} from '../../components/users/custom/custom.component';
import {DriverComponent} from '../../components/users/driver/driver.component';
import {TruckComponent} from '../../components/users/truck/truck.component';
import {AccountItemComponent} from '../../components/users/account-item/account-item.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [{path: 'register', component: RegisterComponent},
      {path: 'custom', component: CustomComponent},
      {path: 'driver', component: DriverComponent},
      {path: 'truck', component: TruckComponent},
      {path: 'item', component: AccountItemComponent}]
  },
  {
    path: 'item', component: AccountItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule
{
}
