import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  idToken: string = '';

  constructor(private auth:Auth,private route : Router) { }

  async login(){
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.idToken = await credential.user.getIdToken();
    if(this.idToken){
      await this.route.navigate(['/profile'])
    }
  }
}
