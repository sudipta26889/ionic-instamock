import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { SingletonProvider } from '../providers/singleton/singleton';

export class LoginService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http, public singleton:SingletonProvider) {

    }
  
    login(username, password) {
        alert(this.singleton.apiUrl);
        var url = '/external/login?username='+username+'&password='+password;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
};

export class HomeService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    home(username) {
        var url = '/external1/home?username='+username;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
};