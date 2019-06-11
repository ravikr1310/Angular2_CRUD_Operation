import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
//import { EmployeeService } from './employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changess: SimpleChanges){
    console.log(changess);
  }
  handleClick(){
    this.notify.emit(this.employee);
  }
}
