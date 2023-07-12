import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {

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