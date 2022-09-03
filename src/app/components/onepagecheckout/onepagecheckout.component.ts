import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';
import { ViewProductComponent } from '../view-product/view-product.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-onepagecheckout',
  templateUrl: './onepagecheckout.component.html',
  styleUrls: ['./onepagecheckout.component.css']
})
export class OnepagecheckoutComponent implements OnInit {
  productLists: Product[] = [];
  constructor(public dialog:MatDialog,private apiService: ApiService) { }
  openDialogg(data:any){
    this.dialog.open(ViewProductComponent,
        {
          data:data,
          height: '70%',
          width: '70%',

        }

        );

    }
  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
    this.loadcheckoutTotal() ;
  }
  getCartDetailss:any=[];

  CartDetails(){
    if(localStorage.getItem('localCart'))
    {
this.getCartDetailss= JSON.parse(localStorage.getItem('localCart')!);
//console.log(this.getCartDetails);


    }

  }


   //sub-Total taka section
   total:number =0
   loadCart(){
     if(localStorage.getItem('localCart')){
       this.getCartDetailss= JSON.parse(localStorage.getItem('localCart')!);
     this.total= this.getCartDetailss.reduce(function(acc:any,val:any){
        return acc+ (val.amt * val.qnt ) ;

     },0);

     }

   }

   //checkoutcart-Total taka section
   checkoutTotal:number =0;
   loadcheckoutTotal(){
     if(localStorage.getItem('localCart')){
       this.getCartDetailss= JSON.parse(localStorage.getItem('localCart')!);
     this.checkoutTotal= this.getCartDetailss.reduce(function(acc:any,val:any){
        return acc+ ((val.amt * val.qnt) ) ;

     },60);

     }

   }

}
