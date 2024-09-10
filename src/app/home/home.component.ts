import { ThisReceiver } from '@angular/compiler';
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
  // AnotherWay
  // imageSrc= ''
  // changeImage(p : HTMLImageElement){
  //   this.imageSrc = p.src; 
  // }
  // AnotherWay
  // changeImage(p : any){
  //   this.imageSrc = p.tareget.src; 
  // }

  ngOnInit() {
  }

}
