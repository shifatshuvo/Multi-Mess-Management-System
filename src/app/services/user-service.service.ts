import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user, userReport } from '../interface/data-type';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  // users

  addAMember(user: any): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.post( BASE_URL + `/users/create`, user, { headers: headers, responseType: 'text' });
  }


  updateAUser(data: any, id: any) {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.put<void>(BASE_URL + `/users/${id}`, data, {
      headers: headers,
    });
  }


  getAUser(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<user>(BASE_URL + `/users/${id}`, { headers: headers });
  }


  getAllUser() {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<user[]>(BASE_URL + '/users', { headers: headers });
  }


  deleteAUser(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.delete<void>(BASE_URL + `/users/${id}`, { headers: headers });
  }


  // 
  getUserReportById(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    // const id = data.userId;

    return this.http.get<userReport>(BASE_URL + `/report/user/${id}`, {
      headers: headers,
    });
  }


}
