import { Component, OnInit, inject } from '@angular/core';
import { IEmployee } from '../../Interfaces/IEmployee';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, RouterLink,MatButtonModule, HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent implements OnInit {
  addData(){

  }
  removeData(){

  }
 
  ngOnInit(): void {
    console.log("init");
    this.httpservice.getAllemployee().subscribe(result=>{
      this.EmployeeList = result;
      console.log("Data");
      console.log(this.EmployeeList)
    })
  }
  
  EmployeeList:IEmployee[]=[];
  httpservice = inject(HttpService);
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'age', 'salary', 'Action'];
  // dataSource = this.EmployeeList;
  
}
