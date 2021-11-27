import { Injectable } from '@angular/core';
import { SignUp } from 'src/app/lib/milly-data-clases';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private keys = {
    'userdata': '61913e4c3b50512acb91d50b014d924ad8cddd2567c0c9ae3caa09c145364635'
  };

  constructor() { }

  setUserData(userData: SignUp) {
    localStorage.setItem(this.keys.userdata, JSON.stringify(userData));
  }

  getUserData(): SignUp | null {
    let data = localStorage.getItem(this.keys.userdata);
    if(!data) {
      return null;
    }

    let userData: SignUp = JSON.parse(data);
    return userData;
  }
}
