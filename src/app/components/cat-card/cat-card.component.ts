import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatModel } from '../../models/cat.model';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [],
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  @Input() cat!: CatModel;
  price!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.price = Math.floor(Math.random() * 999) + 1;
  }

  navigateToDetail(): void {
    this.router.navigate(['/catdetail', this.cat.id]);
  }
}
