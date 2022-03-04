import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './employee/details/details.component';
import { EditComponent } from './employee/edit/edit.component';
import { CreateComponent } from './employee/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './person/add/add.component';
import { InfoComponent } from './person/info/info.component';
import { UpdateComponent } from './person/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PersonComponent,
    HomeComponent,
    NavComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent,
    AddComponent,
    InfoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
