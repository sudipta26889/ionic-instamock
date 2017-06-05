import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GridviewPage } from '../gridview/gridview';
import { WebService } from '../../services/webservice';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WebService]
})
export class HomePage {
  user;
  public bg_image = "assets/images/hbg.jpg";
  public images_group_list;
  constructor(public navCtrl: NavController, private navParams: NavParams, private homeService: WebService, private platform: Platform, private toast: Toast) {
  	this.user = navParams.get('user');
  	// console.log(this.user);
    this.homeService.home(this.user).subscribe(
        data => {
            // console.log(data);
            if (data.success) {
              this.images_group_list = data.images_group_list;
            }else{
              this.showToast(data.msg, 'bottom');
            }
        },
        err => {
            this.showToast('Please connect to internet.', 'bottom');
            console.log(err);
        },
        () => console.log('Home API Called Complete')
    );
  }
  showGrid(type) {
  	this.navCtrl.push(GridviewPage,{ type: type, user: this.user });
  	// this.navCtrl.setRoot(GridviewPage, {}, {animate: true, direction: 'forward'});
  }

  showToast(message, position) {
    if (!this.platform.is('core')) {
      this.toast.show(message, '5000', position).subscribe(
        toast => {
          console.log(toast);
        }
      );
    } else {
      console.info("It will show \'"+message+"\' message as toast in device.");
    }
  }
}
