import { Injectable } from '@angular/core';
import {FirebaseAuth, FirebaseAuthState} from "angularfire2/angularfire2";

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;
  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    })
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get displayName(): string {
    return this.authState.auth.displayName;
  }

  get photoURL(): string {
    return this.authState.auth.photoURL;
  }

  signIn(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login()
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signOut(): void {
    this.auth$.logout();
  }
}
