import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public folder: string;
  public displayMode = 1;
  products: Product[];

  constructor( 
    private activedRoute: ActivatedRoute,
    private ProductService: AppService) { }

  ngOnInit() {
    this.products = this.ProductService.getAllProduct();
    
  }

  onDisplayModeChange(mode: number) : void{
    this.displayMode = mode;
  }
  

}
