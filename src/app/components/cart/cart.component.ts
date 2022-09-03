import { Component, OnInit, ViewChild } from '@angular/core';
import {CartupdateService} from '../../services/cartupdate.service'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenav} from '@angular/material/sidenav';
import { OnepagecheckoutComponent } from '../onepagecheckout/onepagecheckout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(public auth :CartupdateService) {
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem=data;



    });
    this.auth.sidebarcart.subscribe(dataa=>{
      this.getCartDetails=dataa;
    });

   }

  ngOnInit(): void {
    this.cartItemFunction();
    this.CartDetails();
    this.loadCart();

  }
//from shopping cart component
getCartDetails:any[]=[];

  CartDetails(){
    if(localStorage.getItem('localCart'))
    {
this.getCartDetails= JSON.parse(localStorage.getItem('localCart')!);
this.auth.sidebarcart.next(this.getCartDetails)

//console.log(this.getCartDetails);



    }

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


  //cart-number-update
  cartItem:number =0;
  cartItemFunction(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount =JSON.parse(localStorage.getItem('localCart')!);
      //console.log(cartCount);
      this.cartItem =cartCount.length;


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
        this.cartNumberFunc();

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
  cartNumber:number=0;
  cartNumberFunc(){
    var cartValue =JSON.parse(localStorage.getItem('localCart')!)  ;

    this.cartNumber=cartValue.length ;
   // console.log(this.cartNumber);
   this.auth.cartSubject.next(this.cartNumber);



  }





}
