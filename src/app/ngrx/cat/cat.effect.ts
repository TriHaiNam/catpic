import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CatService} from "../../services/cat.service";
import * as CatActions from "./cat.action";
import {catchError, exhaustMap, map, mergeMap, of} from "rxjs";

@Injectable()
export class CatEffect {
  constructor(private action$: Actions,
              private catService: CatService) {
  }

  getCats$ = createEffect(() =>
    this.action$.pipe(
      ofType(CatActions.getAllCats),
      mergeMap((quantity) => this.catService.getCats(quantity.limit).pipe(
          map(cats => CatActions.getAllCatsSuccess({cats})),
          catchError(error => of(CatActions.getAllCatsError({error})
            )
          )
        )
      )
    )
  )
}
