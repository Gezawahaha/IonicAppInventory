import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  products: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductService: AppService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')){return;}
      const productId = paramMap.get('productId');
      this.products = this.ProductService.getData(productId);
    });
  }

  

}
