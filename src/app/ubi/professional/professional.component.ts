import { AfterViewInit, Component, OnInit, SkipSelf } from '@angular/core';
import * as userData from '../demoData.json'

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit, AfterViewInit {
  displayData;
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('userData')){
      this.displayData = JSON.parse( sessionStorage.getItem('userData') )
    }
    else{
      this.displayData = userData['default']
    }
  }

  ngAfterViewInit(){
    this.displayData.skills.forEach(Skill => {
      let sk = Skill.pro + "%"
      console.log(Skill.skill);
        let a = Skill.skill
        document.getElementById(Skill.skill).style.width = sk
        
    });
  }


  

}
