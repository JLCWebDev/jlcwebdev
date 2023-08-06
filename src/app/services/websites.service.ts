import { Injectable } from '@angular/core';
import {  webImg } from '../components/examples/examples.component';
import { Website } from './Website';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  onlyPokies: Website = new Website(
    1,
    "Only Pokies Ecommerce",
    [
      new webImg('/assets/onlypokies1.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0365.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0366.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0370.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0371.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0372.JPG', 'nonActive'),
      ],
    'Store Web',
    ['Welcome to Only Pokies, a passion-fueled e-commerce platform that celebrates the fusion of technology and collectibles. Discover a vast catalog of cherished items, from trading cards to figurines, thoughtfully curated for enthusiasts like you. Enjoy an intuitive search system, secure checkout, and real-time inventory updates, ensuring you never miss a prized find.','With a responsive design for all devices, engaging customer support, and a thriving community, Only Pokies is your gateway to a world of collectible wonders. Start your adventure today and experience the joy of collecting at Only Pokies!'],
    'http://only-pokies.com',
    ['e-Commerce',
      'Mobile Responsive',
      'Brand Recognition',
      'Product Database',
      'User Accounts',
      'Contact Us Form',
      'Product Gallery',]
  )

  MissingPiece: Website = new Website(
    2,
    "The Missing Peace Photography",
    [
      new webImg('/assets/webImg/IMG_0398.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0391.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0392.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0393.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0394.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0395.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0396.JPG', 'nonActive'),
      ],
    'Store Web',
    [`Welcome to The Missing Peace, Step into the captivating world of photography through our artist's portfolio website. Immerse yourself in a diverse collection of mesmerizing images, each expertly captured to convey emotion, beauty, and narrative. Witness the photographer's mastery in capturing moments that leave a lasting impression on the viewer's soul.`],
    'https://luiscldrn.github.io/MissingPiece/',
    ["Image Gallery",
    'Template Website',
    'Contact Us Form',
    'Social Media Integration',
    'Brand Consistency',
    'Third Party Store Connection',]
  )

  ElectronixHub: Website = new Website(
    3,
    "Electronix Hub",
    [
      new webImg('/assets/webImg/electronix1.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0403.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0404.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0405.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0406.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0408.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0409.JPG', 'nonActive'),
      ],
    'Shop Web',
    ['ElectronixHub is your premier destination for cutting-edge electronics, offering a comprehensive selection of high-quality products tailored to meet the needs of tech enthusiasts. Our user-friendly platform ensures a seamless shopping experience, connecting customers with the latest innovations in the electronics industry.'],
    'https://electronixhub.herokuapp.com/',
    ['e-Commerce',
    'Mobile Responsive',
    'Brand Consistency',
    'Product Database',
    'Order Tracking',
    'Admin Functionality',
    'Product Gallery',
    'Advance SEO',
    'Secure Checkout',
    'User Friendly Interface',
    'Product Reviews',
    'Advance Search & Filters',
  ]
  )

  CryptoCoin: Website = new Website(
    4,
    "CryptoCoin",
    [
      new webImg('/assets/webImg/crypto1.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0399.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0400.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0401.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0402.JPG', 'nonActive'),
      ],
    'Store Web',
      ['Welcome to our crypto tracking website, your gateway to the dynamic world of digital currencies. Stay informed with real-time updates on cryptocurrency prices, market trends, and trading volumes. Explore interactive charts and insightful data to make informed decisions and navigate the exciting landscape of crypto investments confidently.'],
    'https://crypto-central-01.netlify.app/',
    [ 'Template Website',
      'Secure User Authentication',
    'Favorites & Watch List',
    'Detailed Coin Information',
    'Historical Price Graphs',
    'Real Time Price Updates',
    'User Friendly Interface',
    'Learning Resources',]
  )

  LeeManor: Website = new Website(
    1,
    "Lee Manor Rehabilitation",
    [
      new webImg('/assets/webImg/IMG_0413.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0420.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0421.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0422.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0423.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0424.JPG', 'nonActive'),
      new webImg('/assets/webImg/IMG_0425.JPG', 'nonActive'),
      ],
    'Enterprise Web',
    ['Welcome to our nursing home website, where compassionate care and a warm, welcoming environment create a home away from home for your loved ones. Discover our comprehensive range of personalized services, tailored to meet the unique needs of each resident. With a dedicated team of experienced caregivers and a focus on creating a vibrant community, we strive to provide the utmost comfort and support for your cherished family members.'],
    'https://leemanor.netlify.app/',
    ['Enterprise Website',
    'Mobile Responsive',
    'Brand Consistency',
    'Clear Layout',
    'Testimonial Showcase',
    'Social Integration',
    'Interactive Forms',
    'Advance SEO',
    'User Friendly Interface',]
  )

  SmileCraft: Website = new Website(
      1,
      "Smile Craft",
      [
        new webImg('/assets/webImg/IMG_0440.JPG', 'nonActive'),
        new webImg('/assets/webImg/IMG_0435.JPG', 'nonActive'),
        new webImg('/assets/webImg/IMG_0436.PNG', 'nonActive'),
        new webImg('/assets/webImg/IMG_0437.PNG', 'nonActive'),
        new webImg('/assets/webImg/IMG_0438.PNG', 'nonActive'),
        new webImg('/assets/webImg/IMG_0439.PNG', 'nonActive'),
        ],
      '',
      ['Welcome to our modern dentist office website, where your smile is our priority. Experience top-notch dental care provided by our skilled and friendly team of professionals. From routine check-ups to advanced treatments, we are committed to ensuring your oral health and confidence shine bright.'],
      '',
      ['Enterprise Website',
      'Mobile Responsive',
      'Brand Consistency',
      'Clear Layout',
      'Testimonial Showcase',
      'Social Integration',
      'Interactive Forms',
      'Advance SEO',
      'User Friendly Interface',]
    )

  // LeeManor: Website = new Website(
  //   1,
  //   "",
  //   [
  //     new webImg('/assets/onlypokies1.JPG', 'nonActive'),
  //     new webImg('/assets/webImg/IMG_0365.JPG', 'nonActive'),
  //     new webImg('/assets/webImg/IMG_0366.JPG', 'nonActive'),
  //     new webImg('/assets/webImg/IMG_0370.JPG', 'nonActive'),
  //     new webImg('/assets/webImg/IMG_0371.JPG', 'nonActive'),
  //     new webImg('/assets/webImg/IMG_0372.JPG', 'nonActive'),
  //     ],
  //   '',
  //   [''],
  //   '',
  //   ['',]
  // )

  Allwebsites: Website[] = [
    this.onlyPokies,
    this.MissingPiece,
    this.ElectronixHub,
    this.CryptoCoin,
    this.LeeManor,
    this.SmileCraft,
  ];

  constructor() { }
}

