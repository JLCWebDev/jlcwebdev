import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { WebsitesService } from 'src/app/services/websites.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {


  currentWebsite: Website = this.websiteService.onlyPokies;
  
	constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal,
    public websiteService: WebsitesService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  displayWebsites: Website[] = this.websiteService.Allwebsites;

	open(content: any) {
		this.modalService.open(content);
	}


websites: Website[] = [
  new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  ),
  new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  ),
  new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  ),
  new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  ),
  new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  ),

]

}


export class Website {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public images: string[],
    public type: string,
    public description: string,
  ) {
    
  }
}