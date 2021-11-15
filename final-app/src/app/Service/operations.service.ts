import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  baseUrl= 'http://localhost:3000';
  constructor(private http: HttpClient) { 
  }
  getFactorial(numero:any){
    const params =new HttpParams({
      fromObject:{
        numero:numero
      }
    })
    return this.http.get<any>(`${this.baseUrl}/factorial`,{params:params})
  }

  getCircleData(numero:any){
    const params =new HttpParams({
      fromObject:{
        radio:numero
      }
    })
    return this.http.get<any>(`${this.baseUrl}/circle`,{params:params})
  }

  getRectangleData(data:any){
    const params =new HttpParams({
      fromObject:data
    })
    return this.http.get<any>(`${this.baseUrl}/rectangle`,{params:params})
  }

  getTriangleData(data:any){
    const params =new HttpParams({
      fromObject:data
    })
    return this.http.get<any>(`${this.baseUrl}/triangle`,{params:params})
  }

  getFibonacci(numero:any){
    const params =new HttpParams({
      fromObject:{
        numero:numero
      }
    })
    return this.http.get<any>(`${this.baseUrl}/fibonacci`,{params:params})
  }
}
