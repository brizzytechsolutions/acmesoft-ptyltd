import { Person } from './../../models/person';
import { EmployeeAcmeService } from './../../services/employee-acme.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;
  person!: Person

  constructor(
    public eService: EmployeeAcmeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['EmployeeId'];
    this.eService.getById(this.id).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

}
