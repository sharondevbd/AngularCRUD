import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './Interfaces/IEmployee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7251/";
  http = inject(HttpClient)
  constructor() { }

  getAllemployee(){
   return this.http.get<IEmployee[]>(this.apiUrl+"api/Employees")
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"api/Employees",data);
  }
}
