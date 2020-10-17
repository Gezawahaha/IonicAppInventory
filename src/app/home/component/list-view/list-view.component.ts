import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  @Input() products: Product;
  constructor() { }

  ngOnInit() {}

}
