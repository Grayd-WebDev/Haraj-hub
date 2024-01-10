import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CategoriesActions from './categories.actions';
import { CategoryService } from '../services/category.service';



@Injectable()
export class CategoriesEffects {
  private actions$ = inject(Actions);
  private categoryService = inject(CategoryService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.initCategories),
      switchMap(() =>
      {
        return this.categoryService.getAllCategories().pipe(
          map(categories=>{
            return CategoriesActions.loadCategoriesSuccess({ categories });
          }),
          catchError(error=>of(CategoriesActions.loadCategoriesFailure({ error })))
        );
      }),
    )
  );
}




// export const categoriesEffects = createEffect(

//   () => {
//     const actions$ = inject(Actions);
//     const categoriesService = inject(CategoryService);

//     return actions$.pipe(
//       ofType(categoriesActions.initCategories),
//       // delay(1500),
//       switchMap(
//         () => categoriesService.getAllCategories().pipe(
//           map(
//             (categories) => categoriesActions.loadCategoriesSuccess({categories})
//           ),
//           catchError((error) => {
//             console.error('Error', error);
//             return of(categoriesActions.loadCategoriesFailure({ error }));
//           })
//         )
//       ),
//     )
//   }, { functional: true }
// )
