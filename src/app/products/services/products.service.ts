import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  urlProduct:string="https://fakestoreapi.com/products";
  urlCategories:string="https://fakestoreapi.com/products/categories";
  urlProductByCategory:string="https://fakestoreapi.com/products/category";

  getAllProducts() {
    return this.http.get(this.urlProduct)
  }

  getAllCategories() {
    return this.http.get(this.urlCategories)
  }
  getProductsByCategory(keyword:string) {
    return this.http.get( this.urlProductByCategory+"/"+keyword)
  }

  getProductById(id:any) {
    return this.http.get(this.urlProduct+"/"+id)
  }
  createProduct(model:any) {
    return this.http.post(this.urlProduct , model)
  }
  
}
