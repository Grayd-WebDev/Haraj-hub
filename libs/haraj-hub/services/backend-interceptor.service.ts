import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, retry, switchMap } from 'rxjs';
import { ProductsEntity, ProductsFacade } from '../products/data-access/src';

@Injectable({
  providedIn: 'root'
})
export class BackendInterceptorService implements HttpInterceptor{
  private productsFacade = inject(ProductsFacade);
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const {method, url, body} = req;
      const id = parseInt(url.split('/').pop()??"")

      if (req.url.endsWith('/api/products') && req.method === 'GET') {
        return this.getProducts();
      }

      if (url.match(/\/api\/products\/\d+$/) && req.method === 'DELETE') {
        return this.deleteProduct(id);
      }

      if (req.url.endsWith('/api/products') && req.method === 'POST') {
        return this.addProduct(body);
      }

      return next.handle(req);
  }

  private getProducts():Observable<HttpEvent<any>>{
      this.productsFacade.allProducts$.pipe(switchMap(products=>{
          return of(new HttpResponse({status: 200, body: products}));
      }));
      return of(new HttpResponse({status: 500, body: {message:"something went wrong..."}}));
  }

  private deleteProduct(id: number):Observable<HttpEvent<any>>{
    const isDeleted = this.productsFacade.deleteProduct(id);
    if(isDeleted){
      return of(new HttpResponse({status: 201, body: {message:`Product ${id} is deleted`}}));
    }
    return of(new HttpResponse({status: 500, body: {message:"something went wrong..."}}));
  }

  private addProduct(product: ProductsEntity):Observable<HttpEvent<any>>{
    this.productsFacade.addProduct(product);
    return of(new HttpResponse({status: 500, body: {message:"something went wrong..."}}));
  }

  constructor() { }
}
