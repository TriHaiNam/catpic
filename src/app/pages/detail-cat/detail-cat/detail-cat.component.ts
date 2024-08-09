import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../../../services/cat.service';
import { CatModel } from '../../../models/cat.model';

@Component({
  selector: 'app-detail-cat',
  standalone: true,
  imports: [],
  templateUrl: './detail-cat.component.html',
  styleUrls: ['./detail-cat.component.scss']
})
export class DetailCatComponent implements OnInit {
  cat!: CatModel;

  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const catId = params['id'];
      this.catService.getCats(catId).subscribe((cats: CatModel[]) => {
        this.cat = cats[0];
      });
    });
  }
}
