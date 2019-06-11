import { Component, OnInit } from '@angular/core';
import { Department } from '../model/department.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender = 'male';
  isActive = true;
  department = '3';

  previewPhoto = false;
  employee : Employee = {
    id: null,
    name:  null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPeferance: null,
    dataOfBirth: null,
    department: '',
    isActive: null,
    photoPath: ''

  }

  departments: Department[] = [
    {id:1, name:'Help Desk'},
    {id:2, name:'IT'},
    {id:3, name:'Development'},
    {id:4, name:'HR'}
  ]
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }
  saveEmployee() : void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
