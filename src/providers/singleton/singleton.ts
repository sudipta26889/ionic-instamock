import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SingletonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SingletonProvider {
  public loginState:boolean = false;
  public apiUrl = "http://localhost/hobby/public/external";
}
