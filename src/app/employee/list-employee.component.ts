import { Component, OnInit, OnChanges} from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';


@Component({
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{
  employees: Employee[];
  employeeToDisplay : Employee;
  private arrayIndex: 1;
  dataFromChild: Employee;
  constructor(private _listEmployee : EmployeeService, private _router : Router) { }

  ngOnInit() {
    this.employees = this._listEmployee.getEmployeeList();
    this.employeeToDisplay = this.employees[0];
  }
  
  nextViewEmployee() : void{
    
    if(this.arrayIndex <= 2){
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }else{
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
    
  }
  
  handleNofity(eventData: Employee){
    this.dataFromChild = eventData;
  }
  onClick(employeeId: number,employeGender: string){
    this._router.navigate(['employees/',employeeId,employeGender]);

  }
}
