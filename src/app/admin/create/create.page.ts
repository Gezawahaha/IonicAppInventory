import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {


  form: NgForm;
  products: Product[];
  type: string;
  constructor(
    private ProductService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.products= this.ProductService.getAllProduct();
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    
  
    const foto = form.value.imageUrl;
    const merek = form.value.merk;
    const model = form.value.model;
    const harga = form.value.harga;
    const stok = form.value.stok;
    const tipe = form.value.tipe;
    const baseClock = form.value.baseClock;
    const boostClock = form.value.boostClock;
    const core = form.value.core;
    const thread = form.value.thread;
    const ukuran = form.value.ukuran;
    const speed = form.value.speed;
    const chipset = form.value.chipset;
    const prosesor = form.value.compatible;
    
    console.log(foto, merek, model, harga, stok, tipe, baseClock, boostClock,
      core, thread, ukuran, speed, chipset, prosesor);
  
    this.ProductService.addData(form.value);
    this.router.navigate(['/admin']);
  }

}
