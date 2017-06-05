import { Component, ViewChild } from '@angular/core';
import { App, Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebService } from '../services/webservice';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SingletonProvider } from '../providers/singleton/singleton';

@Component({
  templateUrl: 'app.html',
  providers: [SingletonProvider]
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage:any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public singleton: SingletonProvider, public webService: WebService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // webService.basepath = 'http://dev.hobbynetworking.com';
    });
    // console.log(platform.platforms());
  }

  ngOnInit() {
      // Let's navigate from TabsPage to Page1
      // this.nav.push(this.rootPage);
   }
  
}
