import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  params;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  fooId;
  constructor(params: NavParams) {
  	this.params = params;
    this.fooId = params.data;
  }
}
