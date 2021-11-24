import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { FlightOrdersComponent } from './flight-orders/flight-orders.component';
import { ScheduleResolver} from './resolvers/schedule-resolver'
import {OrderResolver} from'./resolvers/order-resolver'


const routes: Routes = [
  { path: '', redirectTo: '/schedule', pathMatch: 'full' },
  { 
    path: 'schedule', 
    component: FlightScheduleComponent,
    resolve:{
      schedule:ScheduleResolver
    }
    
  },
  { path: 'orders', 
  component: FlightOrdersComponent,
  resolve:{
    orders:OrderResolver
  }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
