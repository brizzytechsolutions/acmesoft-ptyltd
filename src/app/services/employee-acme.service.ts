import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAcmeService {

  employeeUrl = environment.eBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getById(id: Number): Observable<Employee>{
    const url = `${this.employeeUrl}/{id}`;
    return this.http.get<Employee>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  addEmployee(data: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.employeeUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(id: number, data: Employee): Observable<Employee>{
    const url = `${this.employeeUrl}/{id}`;
    return this.http.put<Employee>(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(id: number): Observable<Employee>{
    const url = `${this.employeeUrl}/{id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
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
