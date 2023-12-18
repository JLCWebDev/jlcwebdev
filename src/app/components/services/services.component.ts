import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {

  // constructor(
  //   private router: Router,
  //   public ScrollService: ScrollService, 
  //   private scroller: ViewportScroller,
  // )

  constructor(
    public ScrollService: ScrollService,
    private scroller: ViewportScroller,
  ) {
    
  }

  services: ServiceCard[] = [
    new ServiceCard(
      1,
      'Basic Web',
      [
        "Cost-effective: Affordable solution.",
        "Professionally designed: Polished template-based website.",
        "Responsive design: Optimal viewing across devices.",
        "Basic SEO: Improved search visibility.",
        "Social media integration: Easy sharing and engagement.",
        "User-friendly interface: Easy website management.",
      ],
      'assets/office-building-bronze.png',
      'Starter is a budget-friendly package that provides individuals and small businesses with a professionally designed template-based website. ',
      '$500',
      '',
    ),
    new ServiceCard(
      2,
      'Growth Web',
      [
        "Custom-designed: Tailored to your business.",
        "Advanced SEO: Improved search rankings.",
        "Analytics integration: Data-driven insights.",
        "Blog setup: Content marketing strategy.",
        "Mobile optimization: Seamless mobile experience.",
        "Lead generation: Capture potential customers.",
        "Conversion optimization: Increase sales and conversions.",
            ],
      'assets/office-building-silver.png',
      'Business Package is a comprehensive web development package designed specifically for growing businesses.',
      '$1,500',
      '',
    ),
    new ServiceCard(
      3,
      'Elite Web',
      [
        "Fully custom design: Unique and personalized.",
        "Advanced SEO: Maximized visibility.",
        "Blog setup: Content marketing advantage.",
        "Branding consistency: Reinforce brand identity.",
        "High-quality imagery: Visual appeal.",
        "Customizable forms: Tailor interactions.",
        "Integration with third-party services: Expand capabilities.",
      ],
      'assets/office-building-gold.png',
      'EliteWeb is the premium web development package that caters to the needs of established businesses seeking a personalized touch.',
      '$5,000',
      '',
    ),
    new ServiceCard(
      4,
      'E-commerce Web',
      [
        "Custom e-commerce website: Tailored for online selling.",
        "Integrated shopping cart: Streamlined checkout process.",
        "Payment gateway setup: Secure online transactions.",
        "Inventory management: Track stock levels.",
        "Order tracking: Provide shipment updates.",
        "Cross-selling and upselling: Boost revenue.",
        "Customer reviews and ratings: Build trust.",
      ],
      'assets/office-building-store .png',
      'ShopWeb is the ideal web development package for businesses venturing into online selling.',
      '$5,000+',
      '',
    ),
    new ServiceCard(
      5,
      'Enterprise Web',
      [
        "Custom e-commerce website: Tailored to complex needs.",
        "Advanced SEO: Enhanced online visibility.",
        "Premium plugins: Expanded functionality options.",
        "Additional tailored features: Business-specific enhancements.",
        "Multi-language support: Reach global markets.",
        "Scalability and performance: Handle high traffic.",
        "Dedicated account manager: Personalized support.",
      ],
      'assets/office-building-store .png',
      'PowerWeb is our top-tier web development package designed for businesses with complex needs.',
      '$12,000+',
      '',
    ),
  ];
}

export class ServiceCard {
  constructor(
    public id: number,
    public name: string,
    public list: string[],
    public img: string,
    public description: string,
    public price: string,
    public link: string,
  ) {
    
  }
}
