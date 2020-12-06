import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubi',
  templateUrl: './ubi.component.html',
  styleUrls: ['./ubi.component.css']
})
export class UbiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setActive(e){
    var link = document.querySelectorAll('.active')
    link.forEach(l=>{
      l.classList.remove('active')
    })
    e.target.classList.add('active')
    
    
  }


}
