import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-flight-orders',
  templateUrl: './flight-orders.component.html',
  styleUrls: ['./flight-orders.component.css']
})
export class FlightOrdersComponent implements OnInit {
  orders:any=[];
  dataUI:any=[];
  filterFlight:number=0;
  constructor(private activatedRoute:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );

    this.activatedRoute.data.subscribe((response: any) => 
    {
      debugger
       Object.keys(response.orders).forEach((key) => {
        var obj={ordernumber:"",flight:0,arrival:"",day:0}
        var value = key;
        obj.ordernumber=value;
        obj.arrival=response.orders[key].destination;
        this.orders.push(obj);
    });
    console.log('order date'+this.orders);
        let evaluateYYZ=this.orders.filter((obj: { arrival: string; })=>obj.arrival==='YYZ'); 
        this.evaluateData(evaluateYYZ,1,1);

        let evaluateYYC=this.orders.filter((obj: { arrival: string; })=>obj.arrival==='YYC'); 
        this.evaluateData(evaluateYYC,2,1);

        let evaluateYVR=this.orders.filter((obj: { arrival: string; })=>obj.arrival==='YVR'); 
        this.evaluateData(evaluateYVR,3,1);

        let evaluateYYE=this.orders.filter((obj: { arrival: string; })=>obj.arrival==='YYE'); 
        this.evaluateData(evaluateYYE,0,0);
    });

    this.activatedRoute.params.subscribe(params => {
      this.filterFlight = parseInt(params['flight']);
      if(this.filterFlight!=0){
        this.dataUI=this.dataUI.filter((obj: { flight: number; })=>obj.flight===this.filterFlight)
      }
    });
  
  }

    evaluateData(data:any,flight:number,day:number){
        for(var i=0;i<data.length;i++){
          let ordernumber=data[i].ordernumber;
          if(i<20){
            data[i].day=day;
            data[i].flight=flight
          }
          else{
            if(day!=0){
              data[i].day=day+1;
              data[i].flight=flight+3;
            }
          }
          this.dataUI.push(data[i]);
        }
      }
      
}
