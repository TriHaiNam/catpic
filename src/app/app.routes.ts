import { Routes } from '@angular/router';
import {ListCatsComponent} from "./pages/list-cats/list-cats/list-cats.component";
import {DetailCatComponent} from "./pages/detail-cat/detail-cat/detail-cat.component";

export const routes: Routes = [
  {
    path: "catdetail/:id",
    component: DetailCatComponent
  },
  {
    path: "cat",
    component: ListCatsComponent
  }
];
