import { EmployeeAcmeService } from './../../services/employee-acme.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  employee!: Employee;
  editForm;

  constructor(
    public eService: EmployeeAcmeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      EmployeeNum:['', Validators.required ],
      EmployeeDate: ['', Validators.required],
      TerminatedDate:['']
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['EmployeeId'];
    this.eService.getById(this.id).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

  onSubmit(formData: any) {
    this.eService.updateEmployee(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('/employee')
    })
  }

}
