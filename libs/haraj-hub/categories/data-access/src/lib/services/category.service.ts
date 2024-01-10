import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CategoryVM } from '../+state/categories.models';

@Injectable({
  providedIn: 'root',
}) 
export class CategoryService {
  private mockDataUrl = '/assets/mockData.json';
  private http = inject(HttpClient);

  getAllCategories(): Observable<CategoryVM[]> {
    // Use the map operator to extract the "categories" array from the response
    return this.http.get<{ categories: CategoryVM[] }>(this.mockDataUrl).pipe(
      map(response => response.categories)
    );
  }

  getCategoryById(id: number): Observable<CategoryVM | undefined> {
    return this.getAllCategories().pipe(
      map((categories) => categories.find((category) => category.id === id))
    );
  }

  getSubcategories(parentCategoryId: number): Observable<CategoryVM[]> {
    return this.getAllCategories().pipe(
      map((categories) =>
        categories.filter((category) => category.parentCategoryId === parentCategoryId)
      )
    );
  }

  getRootCategories(): Observable<CategoryVM[]> {
    return this.getAllCategories().pipe(
      map((categories) => categories.filter((category) => !category.parentCategoryId))
    );
  }
}
