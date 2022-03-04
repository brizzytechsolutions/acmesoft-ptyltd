import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonAcmeService } from 'src/app/services/person-acme.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  createForm;

  constructor(
    public pService: PersonAcmeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      LastName: ['', Validators],
      FirstName: ['', Validators],
      BirthDate: ['', Validators]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    this.pService.addPerson(formData.value).subscribe(res => {
      this.router.navigateByUrl('/person');
    });
  }

}
