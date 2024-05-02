import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { HttpService } from '../../http.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule],
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


  ngOnInit(){
 var id=this.route.snapshot.params["id"]

    console.log(id)
    this.srv.getbyId(id).subscribe({
      next: (data)=> {

      //   this.employeeForm = this.formBuilder.group({
      //     name:[data.name != null ? data.name [Validators.required]],
      //     email:['',[Validators.required]],
      //     phone:['',[Validators.required]],
      //     age:[0,[Validators.required]],
      //     salary:[0,[Validators.required]]
      // }
      }
    })
  }
  formbuilder = Inject(FormBuilder);
  employeeForm = this.formBuilder.group({
  name:['',[Validators.required]],
  email:['',[Validators.required]],
  phone:['',[Validators.required]],
  age:[0,[Validators.required]],
  salary:[0,[Validators.required]]
})
save(){
  console.log(this.employeeForm.value)
this.srv.create(this.employeeForm.value).subscribe({
next:(d)=>{
console.log(d)
this.router.navigateByUrl("")
},
error:(er)=>{
console.log(er)
}

})
}
}
