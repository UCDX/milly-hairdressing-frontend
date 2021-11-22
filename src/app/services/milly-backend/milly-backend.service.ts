import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as MDI from '../../lib/milly-data-clases';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MillyBackendService {

  private host: string = environment.hostBackend;

  constructor(private http: HttpClient) { }

  signup(userdata: MDI.BasicUserData): Observable<MDI.Response<MDI.SignUp>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let endpoint = `${this.host}/api/users/signup`
    return this.http.post<MDI.Response<MDI.SignUp>>(endpoint, userdata, httpOptions);
  }
}
