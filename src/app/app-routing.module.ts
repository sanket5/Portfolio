import { NgModule } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UbiComponent } from './ubi/ubi.component';
import { PersonalComponent } from './ubi/personal/personal.component'
import { ProfessionalComponent } from './ubi/professional/professional.component';
import { ContactComponent } from './ubi/contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'profile', component: UbiComponent ,children:[
      {
        path:'create', component: FormComponent
      },
      {
        path:"me", component: PersonalComponent
      },
      {
        path:"mywork", component: ProfessionalComponent
      },
      {
        path:'contact', component: ContactComponent
      },
      {
        path:"", redirectTo:"create", pathMatch:'full'
      }
    ] 
},
  {
    path:"", redirectTo:"profile", pathMatch:'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
