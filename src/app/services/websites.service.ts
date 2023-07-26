import { Injectable } from '@angular/core';
import { Website } from '../components/examples/examples.component';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  onlyPokies: Website = new Website(
    1,
    "Only Pokies Ecommerce",
    '/assets/Capture1.png',
    [''],
    'Store Web',
    ''
  )


  Allwebsites: Website[] = [];

  constructor() { }
}
