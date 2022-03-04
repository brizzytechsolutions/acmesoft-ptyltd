import { EmployeeAcmeService } from './../services/employee-acme.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    public eServices: EmployeeAcmeService
  ) { }

  ngOnInit(): void {
    this.eServices.getEmployee().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteEmployee(id: number){
    this.eServices.deleteEmployee(id).subscribe(res => {
      this.employees = this.employees.filter(item => item.EmployeeId !== id);
    });
  }

}
