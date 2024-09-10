import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isLightOn: boolean = false;
  showList: boolean = false;

  toggleLight() {
    this.isLightOn = !this.isLightOn;
  }
  showListToggle(){
    this.showList = !this.showList;
  }
  ngOnInit() {
  }

}
