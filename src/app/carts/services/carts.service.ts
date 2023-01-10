import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }

url:string="https://fakestoreapi.com"


getAllCarts(param?:any) {
  let params = new HttpParams()
  params = params.append("startDate" , param?.start).append("endDate" , param?.end)
  return this.http.get(this.url + '/carts'+"?"+{params})
}
deleteCart(id:number) {
  return this.http.delete(this.url + '/carts/' + id)
}
}
