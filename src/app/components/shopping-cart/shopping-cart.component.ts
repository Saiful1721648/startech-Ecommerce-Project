import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
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




  }
getCartDetails:any[]=[];

  CartDetails(){
    if(localStorage.getItem('localCart'))
    {
this.getCartDetails= JSON.parse(localStorage.getItem('localCart')!);
//console.log(this.getCartDetails);


    }

  }
//cartDetails Incraese Product section
  incQnt(prodId:any,qnt:any){
    for(let i=0 ;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].prodId ===prodId){
        if(qnt !=15)
       this.getCartDetails[i].qnt= parseInt(qnt) + 1;

      }

    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();



  }

  //cartDetails Decrease product in tha cart details section
  decQnt(prodId:any,qnt:any){
    for(let i=0 ;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].prodId ===prodId){
        if(qnt !=1)
       this.getCartDetails[i].qnt= parseInt(qnt) -1;

      }

    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();




  }

  //Total taka section
  total:number =0
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails= JSON.parse(localStorage.getItem('localCart')!);
    this.total= this.getCartDetails.reduce(function(acc:any,val:any){
       return acc+ (val.amt * val.qnt ) ;

    },0);

    }

  }

  deleteSongFromPlaylist(getCartDetail:any) {
    if(localStorage.getItem('localCart')){
      this.getCartDetails= JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails)
      this.getCartDetails=this.getCartDetails.filter(c=>c.prodId != getCartDetail.prodId);
      var newCard=JSON.stringify(this.getCartDetails)
      localStorage.setItem('localCart',newCard);
      this.CartDetails();
        this.loadCart();

    /*   const Index = this.getCartDetails.findIndex((s: { getCartDetails: any; }) => s.getCartDetails.prodId === getCartDetail)
      if (Index > -1) {
        this.getCartDetails.splice(Index, 1)
        localStorage.setItem('localCart',JSON.stringify(getCartDetail));
        this.CartDetails();
        this.loadCart();


    }
*/
    }
  }

  //single delete product item
/*  deleteSongFromPlaylist(getCartDetail:any){
   // console.log(getCartDetail);
    if(localStorage.getItem('localCart')){
      this.getCartDetails =JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0 ;i<this.getCartDetails.length ;i++){
        if(this.getCartDetails[i].prodId === getCartDetail){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart',JSON.stringify(getCartDetail));
          this.CartDetails();
        this.loadCart();





        }

      }

    }



  } */

/*
  removeCartItem(getCartDetail: any) {
    for (let i in this.getCartDetails) {
      if (this.getCartDetails[i].id === getCartDetail.id) {
        this.getCartDetails.splice(i, 1);
        localStorage.setItem('localCart',JSON.stringify(getCartDetail));
        this.CartDetails();


      }
    }
    this.getCartDetails.next(this.getCartDetails);
  }

*/



removeAll(){
  localStorage.removeItem('localCart');
  this.getCartDetails=[];
  this.total=0;

}

}
