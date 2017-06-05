import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = navParams.get('user');
    console.log(this.user);
  }

}
