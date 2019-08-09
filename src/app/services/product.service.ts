import { Injectable } from '@angular/core';
import { Data } from '../Data';
import { Product } from '../Product';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = DataProduct;
  private API: string = 'https://5d426e6fbc64f90014a56a4d.mockapi.io/Products';
  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API}`);
  }

  addProduct(product):Observable<Product>{
    return this.http.post<Product>(`${this.API}`, product)
  }
  getProductDetail(id):Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  deleteProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  saveProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }
}
