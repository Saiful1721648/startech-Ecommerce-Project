import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/model/product';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { CartupdateService } from 'src/app/services/cartupdate.service';




@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: any;
  constructor(
    private auth :CartupdateService,
    public apiService: ApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: Product,public dialogRef: MatDialogRef<ViewProductComponent>
  ) { }


  ngOnInit(): void {
    this.products = this.data;

  }
  inc(prod:any){
    // console.log(prod)
    if(prod.qnt!=15){
     prod.qnt += 1;

    }

   }

   dec(prod:any){
    // console.log(prod)
    if(prod.qnt!=1){
     prod.qnt -= 1;
     //console

    }

   }
   itemsCart:any=[];
  addCart(category:any){
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storedataGet : any =[];
      storedataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storedataGet));
    }
    else{
      var id =category.prodId;
      let index:number=  -1;
      this.itemsCart= JSON.parse(localStorage.getItem('localCart')!);
      for(let i= 0; i<this.itemsCart.length;i++){
        if(parseInt(id) ===parseInt(this.itemsCart[i].prodId)){
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;

        }

      }
      if(index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));

      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
      }
      this.cartNumberFunc();
      this.alert();






    }


}
cartNumber:number=0;
cartNumberFunc(){
  var cartValue =JSON.parse(localStorage.getItem('localCart')!)  ;

  this.cartNumber=cartValue.length ;
 // console.log(this.cartNumber);
 this.auth.cartSubject.next(this.cartNumber);



}

alert(){
  window.alert("Product added to the cart");

}

}
