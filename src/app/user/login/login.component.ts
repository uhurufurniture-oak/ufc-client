
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth/auth.service";


@Component({
  template: require('./login.html'),
  styles: [
    require('./login.less')
  ],
})
export class Login {

  constructor(private _auth: AuthService, private _router: Router){}

  login(){
    this._auth.signIn()
      .then(() => this._postSignIn());
  }

  private _postSignIn(): void {
    this._router.navigate(['']);
  }

}