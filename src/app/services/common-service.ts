import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule-model';
import {environment} from '../../environments/environment'
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public http: HttpClient) {}
 
  getFlights(): Observable<Schedule[]> {
    const url=environment.schedule;
    return this.http.get<Schedule[]>(url);
  }

  getOrders(): Observable<Schedule[]> {
    const url=environment.orders;
    return this.http.get<Schedule[]>(url);
  }
} 