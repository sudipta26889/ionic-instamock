import 'rxjs/add/operator/map';
import { SingletonProvider } from '../providers/singleton/singleton';
import { Platform } from 'ionic-angular';
import {Injectable, Component} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WebService {  
    static get parameters() {
        return [[Http]];
    }
    basepath = 'http://dev.hobbynetworking.com';
    constructor(private http:Http, public singleton:SingletonProvider, public platform: Platform) {

    }
  
    login(username, password) {
        // alert(this.singleton.apiUrl);
        var url = this.basepath+'/external/login?username='+username+'&password='+password;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    home(username) {
        var url = this.basepath+'/external/home?username='+username;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    grid(username, type) {
        var url = this.basepath+'/external/grid?username='+username+'&type='+type;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
};
