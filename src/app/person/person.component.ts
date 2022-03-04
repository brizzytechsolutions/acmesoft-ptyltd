import { Person } from './../models/person';
import { PersonAcmeService } from './../services/person-acme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person[] = [];

  constructor(
    public pServices: PersonAcmeService
  ) { }

  ngOnInit(): void {
    this.pServices.getPerson().subscribe((data: Person[]) => {
      this.person = data;
      console.log(this.person);
    })
  }

  deletePerson(id: number){
    this.pServices.deletePerson(id).subscribe(res => {
      this.person = this.person.filter(item => item.PersonId !== id);
    });
  }

}
