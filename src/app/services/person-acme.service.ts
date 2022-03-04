import { Person } from '../models/person';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonAcmeService {

  personUrl = environment.pBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this.personUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getById(id: Number): Observable<Person>{
    const url = `${this.personUrl}/{id}`;
    return this.http.get<Person>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  addPerson(data: Person): Observable<Person>{
    return this.http.post<Person>(this.personUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updatePerson(id: number, data: Person): Observable<Person>{
    const url = `${this.personUrl}/{id}`;
    return this.http.put<Person>(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePerson(id: number): Observable<Person>{
    const url = `${this.personUrl}/{id}`;
    return this.http.delete<Person>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}

