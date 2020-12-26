import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor( private fb: FormBuilder, private portService : PortfolioService, private route: Router) {
    portService.dataShared.subscribe()  

   }
  myPortfolio: FormGroup
  afile;

  ngOnInit(): void {
    this.createForm()
    if (sessionStorage.getItem('userData')){
      let data  = JSON.parse( sessionStorage.getItem('userData') )
      this.myPortfolio.patchValue( data )
    }
  }

  createForm(){
    this.myPortfolio = this.fb.group({
      "personal_details": this.fb.group({
        "fname": [''],
        "work":[''],
        "about":['']
      }),
      "contact_details": this.fb.group({
        "email":[''],
        "mob":[''],
        "address":[''],
        "fb":[''],
        "li":[''],
        "tw":[''],
        "gt":['']
      }),
      "education_details": this.fb.array([this.getEducation()]),
      "languages": this.fb.array([this.getLanguages()]),
      "skills": this.fb.array([this.getSkills()]),
      "experiences": this.fb.array([this.getExperience()]),
      "projects": this.fb.array([ this.getProjects() ])
    })
  }

  //create controls
  getSkills(){
    return this.fb.group({
      "skill": [''],
      "pro":['']
    })
  }
  getEducation(){
    return this.fb.group({
      "school": [''],
      "university": [''],
      "from":[''],
      "to":[''],
      "ongoing":['']
    })
  }
  getLanguages(){
    return this.fb.group({
      "language":['']
    })
  }
  getExperience(){
    return this.fb.group({
      "designation":[''],
      "company":[''],
      "exp_description":[''],
      "exp_from":[''],
      "exp_to":[''],
      "exp_current":['']
    })
  }
  getProjects(){
    return this.fb.group({
      "pname": [''],
      "pdescription":['']
    })
  }

  //add UIs
  addSkills(){
    const control = <FormArray>this.myPortfolio.controls['skills']
    control.push(this.getSkills())
  }
  removeSkills(i){
    const control = <FormArray>this.myPortfolio.controls['skills']
    control.removeAt(i)
  }
  addEducation(){
    const control = <FormArray> this.myPortfolio.controls['education_details']
    control.push(this.getEducation())
  }
  removeEducation(i){
    const control = <FormArray> this.myPortfolio.controls['education_details']
    control.removeAt(i)
  }
  addLanguage(){
    const control = <FormArray> this.myPortfolio.controls['languages']
    control.push(this.getLanguages())
  }
  removeLanguage(i){
    const control = <FormArray> this.myPortfolio.controls['languages']
    control.removeAt(i)
  }
  addProject(){
    const control = <FormArray> this.myPortfolio.controls['projects']
    control.push(this.getProjects())
  }
  removeProject(i){
    const control = <FormArray> this.myPortfolio.controls['projects']
    control.removeAt(i)
  }
  addExperience(){
    const control = <FormArray> this.myPortfolio.controls['experiences']
    control.push( this.getExperience() )
  }
  removeExperience(i){
    const control = <FormArray> this.myPortfolio.controls['experiences']
    control.removeAt(i)
  }

  //get controls
  getControlSkills(){
    return ( this.myPortfolio.get('skills') as FormArray).controls
  }
  getControlEdu(){
    return (this.myPortfolio.get('education_details') as FormArray).controls
  }
  getControlLanguges(){
    return (this.myPortfolio.get('languages') as FormArray).controls
  }
  getControlProject(){
    return (this.myPortfolio.get('projects') as FormArray).controls
  }
  getControlExperience(){
    return (this.myPortfolio.get('experiences')as FormArray).controls
  }


  //other
  onSubmit(){
    console.log(this.myPortfolio.value);
    this.portService.updatePortfoioData(this.myPortfolio.value)
    sessionStorage.setItem('userData', JSON.stringify(this.myPortfolio.value))    
    this.route.navigate(['/profile/me'])

    
  }



}
