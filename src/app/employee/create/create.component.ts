import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeAcmeService } from './../../services/employee-acme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm;

  constructor(
    public eServices: EmployeeAcmeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      EmployeeNum: ['', Validators],
      EmployeeDate: ['', Validators],
      Terminated: ['', Validators]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    this.eServices.addEmployee(formData.value).subscribe(res => {
      this.router.navigateByUrl('/employee');
    });
  }

}
