import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { SingletonProvider } from '../providers/singleton/singleton';

export class WebService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http, public singleton:SingletonProvider) {

    }
  
    login(username, password) {
        // alert(this.singleton.apiUrl);
        var url = '/external/login?username='+username+'&password='+password;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    home(username) {
        var url = '/external/home?username='+username;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    grid(username, type) {
        var url = '/external/grid?username='+username+'&type='+type;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
};
