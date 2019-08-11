import { Injectable } from '@angular/core';
import { Data } from '../Data';
import { Product } from '../Product';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Category } from '../Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = DataProduct;
  private API: string = 'https://5d426e6fbc64f90014a56a4d.mockapi.io';
  constructor( private http: HttpClient) { }

  getCates(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.API}/Category`);
  }
  addCategory(cate):Observable<Category>{
    return this.http.post<Category>(`${this.API}/Category`, cate);
  }
  
  deleteCategory(id): Observable<Category>{
    return this.http.delete<Category>(`${this.API}/Category/${id}`);
  }

  getCategory(id):Observable<Category>{
    return this.http.get<Category>(`${this.API}/Category/${id}`);
  }

  saveCate(cate): Observable<Category>{
    return this.http.put<Category>(`${this.API}/Category/${cate.id}`, cate);
  }

  addProduct(data,id):Observable<Product>{
    return this.http.post<Product>(`${this.API}/Category/${id}/Products`, data);
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API}`);
  }
  
  getProducts(cateId): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API}/Category/${cateId}/Products`);
  }


  getProductDetail(id):Observable<Product>{
    return this.http.get<Product>(`${this.API}/Products/${id}`);
  }
  deleteProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.API}/Products/${id}`);
  }
  saveProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/Products/${product.id}`, product);
  }

}
