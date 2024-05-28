import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page, fund, groceryBill, meal, messReport } from '../interface/data-type';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MessServiceService {

  constructor(private http: HttpClient) { }


  // mess report
  getMessReport() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<messReport>(BASE_URL + '/report/mess', {
      headers: headers,
    });
  }


  // add fund
  addFund(fund: any): Observable<fund> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.post<fund>( BASE_URL + `/fund`, fund, { headers: headers });
  }


  getFundList() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<fund[]>(BASE_URL + '/fund', { headers: headers });
  }


  // paginated fund
  getFundData(page: number, size: number): Observable<Page<fund>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<fund>>(BASE_URL + `/fund/paginated`, { headers: headers, params });
  }


  // getFundData(page: number, size: number): Observable<fund[]> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({Authorization: `${token}`});

  //   let params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('size', size.toString());

  //   return this.http.get<fund[]>(BASE_URL + '/fund/paginated', { headers: headers, params });
  // }

  // getFundData(page: number, size: number): Observable<Page<Fund>> {
  //   return this.http.get<Page<Fund>>(`${this.baseUrl}/paginated?page=${page}&size=${size}`);
  // }


  getAFund(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<fund>(BASE_URL + `/fund/${id}`, { headers: headers });
  }


  updateAFund(data: any, id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.put<void>(BASE_URL + `/fund/${id}`, data, {
      headers: headers,
    });
  }


  // delete fund
  deleteFund(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.delete<void>(BASE_URL + `/fund/${id}`, { headers: headers });
  }


  // deleteFund(id: number): Observable<void> {
  //   return this.http.delete<void>(BASE_URL + `/fund/${id}`);
  // }


  // add fund
  addGroceryBills(fund: any): Observable< string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.post( BASE_URL + `/grocery/create`, fund, { headers: headers, responseType: 'text' });
  }


  getGroceryBillList() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<groceryBill[]>(BASE_URL + '/grocery', { headers: headers });
  }


  getAGrocery(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<groceryBill>(BASE_URL + `/grocery/${id}`, { headers: headers });
  }


  updateAGroceryBill(data: any, id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.put<void>(BASE_URL + `/grocery/${id}`, data, {
      headers: headers,
    });
  }


  deleteGBill(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.delete<void>(BASE_URL + `/grocery/${id}`, { headers: headers });
  }



  // add fund
  addMeal(meal: any): Observable< string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.post( BASE_URL + `/meal/create`, meal, { headers: headers, responseType: 'text' });
  }


  getAMeal(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<meal>(BASE_URL + `/meal/${id}`, { headers: headers });
  }


  updateAMeal(data: any, id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.put<void>(BASE_URL + `/meal/${id}`, data, {
      headers: headers,
    });
  }


  getMealList() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
      return this.http.get<meal[]>(BASE_URL + '/meal', { headers: headers });
  }


  deleteAMeal(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.delete<void>(BASE_URL + `/meal/${id}`, { headers: headers });
  }


}
