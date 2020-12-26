import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbiComponent } from './ubi/ubi.component';
import { PersonalComponent } from './ubi/personal/personal.component';
import { ProfessionalComponent } from './ubi/professional/professional.component';
import { ContactComponent } from './ubi/contact/contact.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    UbiComponent,
    PersonalComponent,
    ProfessionalComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
