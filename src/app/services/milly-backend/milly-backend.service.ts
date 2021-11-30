import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as MDI from '../../lib/milly-data-clases';
import { Observable, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class MillyBackendService {

  private host: string = environment.hostBackend;

  constructor(
    private http: HttpClient,
    private session: SessionService
    ) { }

  private handleError<T>(operation: string) {

    return (error: HttpErrorResponse): Observable<T> => {

      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
        // TODO: better job of transforming error for user consumption
        console.error(
          `${operation} failed: ${error.message}`);
      }

      // Let the app keep running by returning an empty result.
      return of(error.error as T);
      // Return an observable with a user-facing error message.

      //return throwError(
      //  'Something bad happened; please try again later.');
    };

  }

  signup(userdata: MDI.BasicUserData): Observable<MDI.Response<MDI.SignUp>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpoint = `${this.host}/api/users/signup`;
    return this.http.post<MDI.Response<MDI.SignUp>>(endpoint, userdata, httpOptions)
      .pipe(catchError(this.handleError<MDI.Response<MDI.SignUp>>('sigup')));
  }

  signin(email: string, passwd: string): Observable<MDI.Response<MDI.SignUp>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = {
      email: email,
      passwd: passwd
    };
    let endpoint = `${this.host}/api/users/login`;
    return this.http.post<MDI.Response<MDI.SignUp>>(endpoint, body, httpOptions)
      .pipe(catchError(this.handleError<MDI.Response<MDI.SignUp>>('sigin')));
  }

  getServices(): Observable<MDI.Response<MDI.ServiceList>> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpoint = `${this.host}/api/services/get-all`;
    return this.http.get<MDI.Response<MDI.ServiceList>>(endpoint, httpOptions)
      .pipe(catchError(this.handleError<MDI.Response<MDI.ServiceList>>('get service list')));
  }

  addService(name: string, cost: number, desc: string, short_desc: string, duration: number): Observable<MDI.Response<MDI.Service>> {
    let token = this.session.getUserData()?.session_token || ''
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    let body = {
      service_name: name,
      cost: cost,
      service_description: desc,
      short_description: short_desc,
      service_duration: duration
    };
    let endpoint = `${this.host}/api/services/add`;
    return this.http.post<MDI.Response<MDI.Service>>(endpoint, body, httpOptions)
      .pipe(catchError(this.handleError<MDI.Response<MDI.Service>>('add service')));
  }
  
  createReservation(serv_id: number, reserv_date: string, s_time: string): Observable<MDI.Response<MDI.Reservation>> {
    let token = this.session.getUserData()?.session_token || ''
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    let body = {
      service_id: serv_id,
      reservation_date: reserv_date,
      start_time: s_time,
    };
    let endpoint = `${this.host}/api/users/create-reservation`;
    return this.http.post<MDI.Response<MDI.Reservation>>(endpoint, body, httpOptions)
      .pipe(catchError(this.handleError<MDI.Response<MDI.Reservation>>('create reservation')));
  }
}
