import { Component, OnInit } from '@angular/core';
import {CartupdateService} from '../../services/cartupdate.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth :CartupdateService) {
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem=data;

    });
   }

  ngOnInit(): void {
    this.cartItemFunction();
  }
  cartItem:number =0;
  cartItemFunction(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount =JSON.parse(localStorage.getItem('localCart')!);
      //console.log(cartCount);
      this.cartItem =cartCount.length;


    }


  }

}
