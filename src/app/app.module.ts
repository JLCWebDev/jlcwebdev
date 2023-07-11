import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServicesComponent } from './components/services/services.component';
import { LandingComponent } from './components/landing/landing.component';
import { ExamplesComponent } from './components/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServicesComponent,
    LandingComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
