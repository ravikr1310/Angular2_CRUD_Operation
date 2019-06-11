import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { EmployeeService } from './employee/employee.service';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

const appRoutes : Routes = [
  {path: 'list', component : ListEmployeeComponent},
  {path: 'create', component : CreateEmployeeComponent},
  {path: 'employees/:id/:gender', component : EmployeeDetailsComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
