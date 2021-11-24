import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { FlightOrdersComponent } from './flight-orders/flight-orders.component';
import {CommonService} from './services/common-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FlightScheduleComponent,
    FlightOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
