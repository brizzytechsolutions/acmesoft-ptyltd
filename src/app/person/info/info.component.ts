import { PersonAcmeService } from './../../services/person-acme.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id!: number;
  person!: Person;

  constructor(
    public pService: PersonAcmeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['PersonId'];
    this.pService.getById(this.id).subscribe((data: Person) => {
      this.person = data;
    });
  }

}
