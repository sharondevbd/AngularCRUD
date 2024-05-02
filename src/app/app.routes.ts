import { Routes } from '@angular/router';
import path from 'path';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './Components/employee-form/employee-form.component';

export const routes: Routes = [
    {path:"", component:EmployeeListComponent},
    {path:"Create", component:EmployeeFormComponent},
    {path:"Edit/:id", component:EmployeeFormComponent},


];
