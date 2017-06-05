import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GridviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gridview',
  templateUrl: 'gridview.html',
})
export class GridviewPage {
  user;
  type;
  public gridTitle;
  public images_list;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('type');
    this.user = navParams.get('user');
    console.log(this.user);
    this.gridTitle = this.type+" Image Grid";
    this.images_list = [
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg',
      'assets/images/1.jpg'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridviewPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
}
