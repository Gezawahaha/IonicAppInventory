import { Injectable } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private products: Product[] = [
    {
      id: 'produk1',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/6/9/9651507/9651507_9d95c048-69f9-4a75-a97f-8eb73ab50c83_700_700',
      merek: 'Intel',
      model: 'Core i7-10700',
      baseClock: '2.9',
      boostClock: '4.8',
      core: '8',
      thread: '16',
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: '5199000',
      stok: '3',
    },
    {
      id: 'produk2',
      tipe: 'VGA',
      foto: 'https://www.shwetacomputer.com/wp-content/uploads/2020/06/26nrl7hpy3ew-image-main-600x600.jpg',
      merek: 'Galax',
      model: 'RTX 2060 Super 8GB',
      baseClock: '5.9 ',
      boostClock: '9 ',
      core: '8',
      thread: '16',
      speed: '',
      ukuran: null,
      chipset: 'NVDIA',
      prosesor: 'GFORCE RTX',
      harga: '6999000',
      stok: '1',
    },
    {
      id: 'produk3',
      tipe: 'CPU',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6YBqpnFhy4LBnFI0wID_0QoQ5l4NQ9zKzQw&usqp=CAU',
      merek: 'Ryzen',
      model: '5 3700XT ',
      baseClock: '2.9',
      boostClock: '4.8',
      core: '8',
      thread: '16',
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: '3899000',
      stok: '31',
    },
    {
      id: 'produk4',
      tipe: 'CPU',
      foto: 'data:image/jpeg;base64,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',
      merek: 'Ryzen',
      model: '7 3800XT ',
      baseClock: '2.9',
      boostClock: '4.8',
      core: '8',
      thread: '16',
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: '6099000',
      stok: '23',
    },
    {
      id: 'produk5',
      tipe: 'CPU',
      foto: 'data:image/jpeg;base64,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',
      merek: 'Ryzen',
      model: '9 3900XT ',
      baseClock: '2.9',
      boostClock: '4.8',
      core: '8',
      thread: '16',
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: '7999000',
      stok: '0',
    }
  ];

  constructor() { }

  getAllProduct(){
    return [...this.products];
  }

  getData(itemId: string){
    return {...this.products.find(product => {
      return product.id === itemId;
    })}
  }
  deleteData(productId: string) {
    this.products = this.products.filter(product => {
      return product.id !== productId;
    });
  }

  editData(
    productId: string,
    newfoto: string,
    newMerek: string,
    newModel: string,
    newHarga: string,
    newStok: string,
    newBaseClock: string,
    newBoostClock: string,
    newCore: string,
    newThread: string,
    newUkuran: string,
    newSpeed: string,
    newChipset: string,
  ){
    length = this.products.length;
    for(var i = 0; i < length; i++){
      if(this.products[i].id == productId){
        this.products[i].foto = newfoto;
        this.products[i].merek = newMerek;
        this.products[i].model = newModel;
        this.products[i].harga = newHarga;
        this.products[i].stok = newStok;
        this.products[i].baseClock = newBaseClock;
        this.products[i].boostClock = newBoostClock;
        this.products[i].core = newCore;
        this.products[i].thread = newThread;
        this.products[i].ukuran = newUkuran;
        this.products[i].speed = newSpeed;
        this.products[i].chipset = newChipset;
        
      }
    }
  }

  newItemId: string;
  addData(addedItem: Product){
    length = this.products.length + 1;
    this.newItemId = 'produk' + length;
    this.products.push({
      id: this.newItemId,
      foto: addedItem.foto,
      merek: addedItem.merek,
      model: addedItem.model,
      harga: addedItem.harga,
      stok: addedItem.stok,
      tipe: addedItem.tipe,
      baseClock: addedItem.baseClock,
      boostClock: addedItem.boostClock,
      core: addedItem.core,
      thread: addedItem.thread,
      ukuran: addedItem.ukuran,
      speed: addedItem.speed,
      chipset: addedItem.chipset,
      prosesor: addedItem.prosesor
    });
  }

}
