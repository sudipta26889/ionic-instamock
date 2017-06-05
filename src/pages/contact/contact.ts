import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = navParams.get('user');
    console.log(this.user);
  }

}
