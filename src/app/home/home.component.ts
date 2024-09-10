import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isDark=false;

  photos=["https://iili.io/Hv8YMw7.jpg", "https://iili.io/Hv8YE92.jpg", "https://iili.io/Hv8YGuS.jpg"];
  selectedPhoto = 1;
  selectPhoto(n : number){
    this.selectedPhoto = n; 
    console.log("this.selectedPhoto = ", this.selectedPhoto);
  }
  ngOnInit() {
  }

}
