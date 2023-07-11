import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbScrollSpy } from '@ng-bootstrap/ng-bootstrap';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  public screenHeight: number = 0;

  mobileM: string = ''
  mobileMenu: string = ''
  
  constructor(

    private router: Router,
    public ScrollService: ScrollService, 
    private scroller: ViewportScroller,
  ) {

  }

  isActiveTab() {
    console.log(this.scroller.getScrollPosition()[1]);
    console.log(this.screenHeight)
  }

  ngOnInit(): void {
      this.screenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
  }

  mobile() {
    if(this.mobileM === ''){
      this.mobileM = 'is-active'
      this.mobileMenu = 'active1'
  }
    else {
      this.mobileM = ''
      this.mobileMenu = ''
    }
  }

}
