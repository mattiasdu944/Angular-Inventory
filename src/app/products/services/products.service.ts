import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SimpleProduct } from '../interfaces/simple-product';
import { GetProductsResponse } from '../interfaces/products-response';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);


  public findAll(): Observable<SimpleProduct[]> {
    return this.http.get<GetProductsResponse>(environment.apiUrl + '/products')
      .pipe(
        map((resp) => resp.products),
      );
  }

  public findOne(slug: string) {
    return this.http.get<{product: SimpleProduct}>(environment.apiUrl + '/products/' + slug )
      .pipe( 
        map( res => res.product)
      )
  }



}
