import { Component, OnInit } from '@angular/core';
import {CartupdateService} from '../../services/cartupdate.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth :CartupdateService) { }

  ngOnInit(): void {
  }
  productArray =[
    {
      prodId:1,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Computer",
      amt : 35000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1

    },
    {
      prodId:2,
      img:"../../../assets/i3-12100f.jpg",
      productTitle : "Computer",
      amt : 40000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1

    },
    {
      prodId:3,
      img:"../../../assets/intel-11th-gen-core-i5.jpg",
      productTitle : "Computer",
      amt : 800000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1

    },
    {
      prodId:4,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Computer",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1

    },{
      prodId:5,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Computer",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1

    }
  ];

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
    //console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storedataGet : any =[];
      storedataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storedataGet));
    }
    else{
      var id =category.prodId;
      let index:number=-1;
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
