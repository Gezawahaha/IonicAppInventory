import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  @Input() products: Product;
  constructor() { }

  ngOnInit() {}

}
