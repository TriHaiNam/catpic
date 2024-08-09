import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CatState} from "../../../ngrx/cat/cat.state";
import * as CatActions from "../../../ngrx/cat/cat.action";
import {Store} from "@ngrx/store";
import {CatCardComponent} from "../../../components/cat-card/cat-card.component";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CatCardComponent, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  cat$!: Observable<CatState>

  constructor(private store: Store<{ cat: CatState }>) {
    this.cat$ = this.store.select('cat')
    this.store.dispatch(CatActions.getAllCats({limit: 15}))
    this.cat$.subscribe(data => {
      console.log(data)
    })
  }
}
