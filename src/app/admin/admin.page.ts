import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { url } from 'inspector';
import { AppService } from '../app.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  products: Product[];

  constructor( 
    private activedRoute: ActivatedRoute,
    private ProductService: AppService,
    private alertCtrl: AlertController) { }


  ionViewWillEnter(){
    this.products = this.ProductService.getAllProduct();
  }  

  ngOnInit() {
    this.products = this.ProductService.getAllProduct();
  }

  async deleteAlert(productId:string, slidingItem: IonItemSliding){
    console.log('masok')
    const alert = await this.alertCtrl.create({
      header: 'Delete Product',
      message: 'Are you sure want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.onDelete(productId)
        }
      ]
    });
    await alert.present();
  }

  

  onDelete(productId:string){
    this.ProductService.deleteData(productId);
    this.ionViewWillEnter();
    
  }








    // deletePlace() {
  //   this.recipesService.deletePlace(this.loadedPlace.id);
  //   this.router.navigate(['/places']);
  //   this.presentToast();
  // }

}
