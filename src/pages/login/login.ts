import { Component, Inject } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { SingletonProvider } from '../../providers/singleton/singleton';
import { WebService } from '../../services/webservice';
import { Toast } from '@ionic-native/toast';

declare var window: any;
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [WebService]
})
export class LoginPage {
  private login_form : FormGroup;
  public app;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public appp: App, public singleton:SingletonProvider, private loginService: WebService, private platform: Platform, private toast: Toast) {
  	this.app = appp;
    this.login_form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
  	var username = this.login_form.value.username;
  	var password = this.login_form.value.password;
    this.loginService.login(username, password).subscribe(
        data => {
            // console.log(data);
            if (data.success) {
              var usersName = data.user.name;
              var usersEmail = data.user.email;
              this.navCtrl.push(TabsPage,{ user: usersName});
            }else{
              this.showToast(data.msg, 'bottom');
            }
        },
        err => {
            this.showToast('Please connect to internet.', 'bottom');
            console.log(err);
        },
        () => console.log('Login API Called Complete')
    );
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
