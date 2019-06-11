import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Department } from '../model/department.model'

@Injectable()

export class EmployeeService {
    private listEmployee: Employee[] = [

        {
            id: 1,
            name: "Jone",
            gender: "Male",
            email: "jone@gmail.com",
            phoneNumber: 1111111111,
            contactPeferance: "test",
            dataOfBirth: new Date("22/04/1990"),
            department: "IT",
            isActive: true,
            photoPath: "assets/images/img-1.png"
        },
        {
            id: 3,
            name: "Keli",
            gender: "Famale",
            email: "female@gmail.com",
            phoneNumber: 7777777777,
            contactPeferance: "test",
            dataOfBirth: new Date("13/0/1988"),
            department: "Research",
            isActive: true,
            photoPath: "assets/images/img-2.png"
        },
        {
            id: 3,
            name: "Marry",
            gender: "Female",
            email: "marry@gmail.com",
            phoneNumber: 3333333333,
            contactPeferance: "test",
            dataOfBirth: new Date("6/09/2000"),
            department: "Testing",
            isActive: true,
            photoPath: "assets/images/img-3.png"
        }
    ]   
    getEmployeeList(): Employee[] {
        return this.listEmployee;
    }
    save(employee: Employee){
        this.listEmployee.push(employee);
    }
}  