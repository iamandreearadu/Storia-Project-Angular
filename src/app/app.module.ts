import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/form/form.component';
import { StoriaItaliaComponent } from './components/storia-italia/storia-italia.component';
import { StoriaCaffeComponent } from './components/storia-caffe/storia-caffe.component';
import { StoriaEventsComponent } from './components/storia-events/storia-events.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    FormComponent,
    StoriaItaliaComponent,
    StoriaCaffeComponent,
    StoriaEventsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
