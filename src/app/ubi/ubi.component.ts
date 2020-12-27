import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-ubi',
  templateUrl: './ubi.component.html',
  styleUrls: ['./ubi.component.css']
})
export class UbiComponent implements OnInit {

  path;
  constructor(  private portService: PortfolioService, private route :Router ) {

   }

  ngOnInit(): void {
    let path = this.route.url
    console.log(path);
      if (path == "/profile/me"){
        var link = document.querySelectorAll('.active')
        link.forEach(l=>{
          l.classList.remove('active')
        })
        document.getElementById('home').classList.add('active')
      }
      
  }

  setActive(e){
    var link = document.querySelectorAll('.active')
    link.forEach(l=>{
      l.classList.remove('active')
    })
    e.target.classList.add('active')
  }


}
