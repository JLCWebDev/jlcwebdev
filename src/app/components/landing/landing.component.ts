import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  imgNum: number = 0;
  
  images: string[] = [
    "/assets/IMG1.png",
    "/assets/IMG2.png",
    "/assets/IMG3.png",
    "/assets/IMG4.png",
  ]
  
  backgroundImg!: string;


  ngOnInit(): void {
    this.backgroundImg = this.images[this.imgNum];
    setInterval(this.changeBackground.bind(this), 3000);
  }
  
  changeBackground() {
    if (this.imgNum > 2) {
      this.imgNum = 0;
    }
    this.imgNum++;
    this.backgroundImg = this.images[this.imgNum]
  }
}
