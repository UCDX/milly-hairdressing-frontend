import { Injectable } from '@angular/core';
import { SignUp, Service } from 'src/app/lib/milly-data-clases';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private keys = {
    'userdata': '61913e4c3b50512acb91d50b014d924ad8cddd2567c0c9ae3caa09c145364635',
    'current_service': '50330f81bafd6ca339d3ae94a8ba5c99d1e1895695f1334e461d2d64f8ed77f7'
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

  setService(service: Service) {
    localStorage.setItem(this.keys.current_service, JSON.stringify(service))
  }

  getService(): Service | null {
    let data = localStorage.getItem(this.keys.current_service);
    if(!data) {
      return null;
    }

    let _data: Service = JSON.parse(data);
    return _data;
  }
}
