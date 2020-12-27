import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  strFile;
  uplodedImage;

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
        "fname": ['', Validators.required],
        "work":['',Validators.required],
        "about":['',Validators.required],
        "profilePic":['']
      }),
      "contact_details": this.fb.group({
        "email":['',Validators.required],
        "mob":['',Validators.required],
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
      "skill": ['',Validators.required],
      "pro":['',Validators.required]
    })
  }
  getEducation(){
    return this.fb.group({
      "school": ['',Validators.required],
      "university": ['',Validators.required],
      "from":['',Validators.required],
      "to":[''],
    })
  }
  getLanguages(){
    return this.fb.group({
      "language":['',Validators.required]
    })
  }
  getExperience(){
    return this.fb.group({
      "designation":['',Validators.required],
      "company":['',Validators.required],
      "exp_description":['',Validators.required],
      "exp_from":['',Validators.required],
      "exp_to":[''],
    })
  }
  getProjects(){
    return this.fb.group({
      "pname": ['',Validators.required],
      "pdescription":['',Validators.required]
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
    // this.myPortfolio.get('education_details').patchValue('profilePic', this.afile) 
    this.myPortfolio.value.personal_details.profilePic = sessionStorage.getItem('profilePic')
    sessionStorage.removeItem('profilePic')
    console.log(this.myPortfolio.value );
    this.portService.updatePortfoioData(this.myPortfolio.value)
    sessionStorage.setItem('userData', JSON.stringify(this.myPortfolio.value))    
    this.route.navigate(['/profile/me']) 
  }

  reset(){
    this.myPortfolio.reset()
  }

  selectPic(e){
    let file = e.target.files[0]
    console.log(file);
    let reader = new FileReader();
    var ob = (<HTMLImageElement> document.getElementById('uplodedImg'))

    this.afile = reader.onloadend = function() {
        console.log('RESULT', reader.result)
        sessionStorage.setItem('profilePic', String(reader.result))
        ob.src = String(reader.result)
        ob.style.display = 'inline'
    }
    reader.readAsDataURL(file);
    
  }



}
