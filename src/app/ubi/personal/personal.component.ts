import { Component, OnInit } from '@angular/core';
import * as userData from "../demoData.json"


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayData;
  constructor(  ) {    
   }

  ngOnInit(): void {    
    if (sessionStorage.getItem('userData')){
      this.displayData = JSON.parse( sessionStorage.getItem('userData') )
    }
    else{
      this.displayData = userData['default']
    }
    console.log(this.displayData.personal_details);
        
  }

  scroll(target: HTMLElement ){
    console.log(target)
    target.scrollIntoView()

  }

}
