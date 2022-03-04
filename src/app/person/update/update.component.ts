import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonAcmeService } from 'src/app/services/person-acme.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  person!: Person;
  editForm;

  constructor(
    public pService: PersonAcmeService,
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
    this.id = this.route.snapshot.params['PersonId'];
    this.pService.getById(this.id).subscribe((data: Person) => {
      this.person = data;
    });
  }

  onSubmit(formData: any) {
    this.pService.updatePerson(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('/employee')
    })
  }

}
