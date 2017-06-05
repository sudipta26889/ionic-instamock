import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { WebService } from '../../services/webservice';
import { Toast } from '@ionic-native/toast';
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
  providers: [WebService]
})
export class GridviewPage {
  user;
  type;
  public gridTitle;
  public images_list;
  constructor(public navCtrl: NavController, public navParams: NavParams, private gridService: WebService, private platform: Platform, private toast: Toast) {
    this.type = navParams.get('type');
    this.user = navParams.get('user');
    console.log(this.user);
    this.gridTitle = this.type+" Image Grid";
    this.gridService.grid(this.user, this.type).subscribe(
        data => {
            // console.log(data);
            if (data.success) {
              this.images_list = data.images_list;
            }else{
              this.showToast(data.msg, 'bottom');
            }
        },
        err => {
            this.showToast('Please connect to internet.', 'bottom');
            console.log(err);
        },
        () => console.log('Grid API Called Complete')
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridviewPage');
  }
  goBack(){
    this.navCtrl.pop();
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
