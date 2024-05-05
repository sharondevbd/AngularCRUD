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

  getbyId(id:number){

    return this.http.get<IEmployee>(this.apiUrl+"api/Employees/"+id)
   }

   update(id: number, data: any): Observable<any> {
    return this.http.put(this.apiUrl+"api/Employees/"+id, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl+"api/Employees/"+id);
  }

  // getbyId(id: string): void {
  //   this.http.get(id)
  //     .subscribe({
  //       next: (data) => {
  //         this.employee = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  
}
