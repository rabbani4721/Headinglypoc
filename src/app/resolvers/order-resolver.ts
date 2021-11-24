import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 import { CommonService } from '../services/common-service';
 
@Injectable({
  providedIn: 'root'
})
export class OrderResolver implements Resolve<any> {
  constructor(private commonService: CommonService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get schedule in resolver...');
    return this.commonService.getOrders().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}