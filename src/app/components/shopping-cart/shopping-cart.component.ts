import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }
getCartDetails:any=[];

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
       return acc+ (val.amt +val.qnt ) ;

    },0);

    }

  }


}
