import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Website } from 'src/app/services/Website';
import { WebsitesService } from 'src/app/services/websites.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {


  test: Website = this.websiteService.onlyPokies;
  currentWebsite!: Website;
  currentMainImg: string = "";
  galleryImg!: webImg;

	constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal,
    public websiteService: WebsitesService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  displayWebsites: Website[] = this.websiteService.Allwebsites;

	open(content: any, web: Website) {
    this.currentWebsite = web;
    this.currentMainImg = this.currentWebsite.images[0].url;
    web.images[0].status = 'active'
		this.modalService.open(content);
	}

  changeImg(img: webImg) {
    this.currentWebsite.images.forEach(e => e.status = 'inactive')
    img.status = 'active';
    this.currentMainImg = img.url;
  }

websites: Website[] = this.websiteService.Allwebsites;

}




export class webImg {
  constructor(
    public url: string,
    public status: string,
  ) {
    
  }
}