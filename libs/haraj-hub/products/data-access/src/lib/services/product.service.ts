import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProductsEntity } from '../+state/products.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockDataUrl = '/assets/mockData.json';
  private http = inject(HttpClient);

  getAllProducts(page: number, pageSize=25 ): Observable<ProductsEntity[]> {
    return this.http.get<{ products: ProductsEntity[] }>(this.mockDataUrl).pipe(
      map(({products}) => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, products.length);
        return products.slice(startIndex, endIndex);
      })
    );
  }

  getProductById(id: number): Observable<ProductsEntity | undefined> {
    return this.getAllProducts(1,25).pipe(
      map((Products) => Products.find((product) => product.id === id))
    );
  }
}
