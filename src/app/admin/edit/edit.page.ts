import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/products.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  loadedProducts: Product;
  products: Product[];
  form: FormGroup;

  newfoto: string;
  newMerek: string;
  newModel: string;
  newHarga: string;
  newStok: string;
  newBaseClock: string;
  newBoostClock: string;
  newCore: string;
  newThread: string;
  newUkuran: string;
  newSpeed: string;
  newChipset: string;
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductService: AppService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {return;}
      const productId = paramMap.get('productId');
      this.loadedProducts = this.ProductService.getData(productId);

      this.newfoto = this.loadedProducts.foto;
      this.newMerek = this.loadedProducts.merek;
      this.newModel = this.loadedProducts.model;
      this.newHarga = this.loadedProducts.harga;
      this.newStok = this.loadedProducts.stok;
      this.newBaseClock = this.loadedProducts.baseClock;
      this.newBoostClock = this.loadedProducts.boostClock;
      this.newCore = this.loadedProducts.core;
      this.newThread = this.loadedProducts.thread;
      this.newUkuran = this.loadedProducts.ukuran;
      this.newSpeed = this.loadedProducts.speed;
      this.newChipset = this.loadedProducts.chipset;
    });

  }

  async alertEdit(){
    const alert = await this.alertCtrl.create({
      header: 'Edit data',
      message: 'Are you sure to modify this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  onSubmit(){
    this.ProductService.editData(
      this.loadedProducts.id,
      this.newfoto,
      this.newMerek,
      this.newModel,
      this.newHarga,
      this.newStok,
      this.newBaseClock,
      this.newBoostClock,
      this.newCore,
      this.newThread,
      this.newUkuran,
      this.newSpeed,
      this.newChipset,
    );
    this.router.navigate(['./admin'])
  }
}
