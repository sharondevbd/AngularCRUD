import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormField, MatInputModule} from '@angular/material/input'; 
import { HttpService } from '../../http.service';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { IEmployee } from '../../Interfaces/IEmployee';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule, MatFormField, EmployeeListComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  // formBuilder = inject(FormBuilder);
  // httpService = inject(HttpService);
  // router = inject(Router);
  // route = inject(ActivatedRoute);
  // toaster=inject(ToastrService);

  constructor(private formBuilder: FormBuilder,
    private srv:HttpService, private route: ActivatedRoute,
    private router: Router) { }
     Id!:number;
    Employee:IEmployee[]=[];
    isEdit = false;
  ngOnInit(){
 var id=this.route.snapshot.params["id"]
    console.log(id)
    this.srv.getbyId(id).subscribe({
      next: (data)=> {
        console.log(data)
        this.employeeForm.patchValue(data);
        this.isEdit = true;
        this.Id=id;
        // this.employeeForm.controls.id.disabled
        // this.formBuilder.pathValue(data);
      }
    })
  }
  formbuilder = Inject(FormBuilder);
  employeeForm = this.formBuilder.group({
    id:[0,[Validators.required]],
  name:['',[Validators.required]],
  email:['',[Validators.required]],
  phone:['',[Validators.required]],
  age:[0,[Validators.required]],
  salary:[0,[Validators.required]]
})

save(){
  if(!this.isEdit){

    this.srv.create(this.employeeForm.value).subscribe({
      next:(d)=>{
      console.log(d)
      this.router.navigateByUrl("")},
      error:(er)=>{console.log(er)
      }})
  }
  else{
    
    this.srv.update(this.Id, this.employeeForm.value).subscribe({
      next:(data)=> {
        console.log(data)
        this.router.navigateByUrl("")
      }
    })
  }
console.log(this.employeeForm.value)

}


}