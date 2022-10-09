import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,tap } from 'rxjs';
import { Product } from '../_Models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiurl = 'https://assignment-api.piton.com.tr/api/v1/product/';

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {

  }
  GetProduct(): Observable<Product> {
    return this.http.get<Product>(this.apiurl + 'all', httpOptions);
  }
  GetProductbyID(id:any){
    return this.http.get(this.apiurl + 'get'+id , httpOptions);
  }
  
}
