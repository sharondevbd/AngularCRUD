import { Component, OnInit, inject } from '@angular/core';
import { IEmployee } from '../../Interfaces/IEmployee';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
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
router=inject(Router)
  
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
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'age', 'salary', 'Action','Delete'];
  // dataSource = this.EmployeeList;
  Delete(empId:number){
 
    this.httpservice.delete(empId).subscribe({
      next:(data)=>{
        console.log("Deleted"+data.id)
        this.router.navigateByUrl("")
       }
    })
  }
}
