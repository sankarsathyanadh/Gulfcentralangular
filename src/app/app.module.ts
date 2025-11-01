import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Login } from './login/login.component';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Userdashboard } from './userdashboard/userdashboard';
import { Servicesgulfcentral } from './servicesgulfcentral/servicesgulfcentral';
import { Usercreation } from './usercreation/usercreation';
import { Visaapplication } from './visaapplication/visaapplication';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Home,
    Signup,
    Dashboard,
    Userdashboard,
    Servicesgulfcentral,
    Usercreation,
    Visaapplication
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
