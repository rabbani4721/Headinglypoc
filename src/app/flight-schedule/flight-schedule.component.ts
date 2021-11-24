import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Schedule} from '../models/schedule-model';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {
  schedule:Schedule[];

  constructor(private activatedRoute:ActivatedRoute,private route:Router) {
    this.schedule=[];
   }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      this.schedule = response.schedule;
      console.log(
        'Activated route data in Component:::',
        this.schedule
      );
    });
  }

  navigateToOrders(flight:number){
    this.route.navigate(["/orders", { 'flight': flight }]);
  }
}
