import { Component, Input, OnInit, Output } from '@angular/core';
import {CartupdateService} from '../../services/cartupdate.service'
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';
import { ViewProductComponent } from '../view-product/view-product.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { FliterPipe } from 'src/app/shared/fliter.pipe';
import { Category } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productLists: Product[] = [];
  searchKey:string="";
  catmenu:string="";

  //category
  public filterCategory:any[]=[];
  category: any[] = [];
  subCategory1: any[] = [];
  subCategory2: any[] = [];

  constructor(public auth :CartupdateService,public dialog:MatDialog,public apiService: ApiService) { }

  openDialog(data:any){
    this.dialog.open(DialogExampleComponent,
        {
          data:data,

        }

        );

    }
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
    this.productLists = this.apiService.getProducts();
    this.filterCategory= this.apiService.getProducts();
    this.CartDetails();
    this.auth.search.subscribe(val=>{
      this.searchKey=val;
    });
    this.auth.sidebarcart.subscribe(dataa=>{
      this.getCartDetails=dataa;
    });

  }
  /* productArray =[
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
  ]; */

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
      this.openDialog(category);
      this.CartDetails();





    }






  }




  cartNumber:number=0;
  cartNumberFunc(){
    var cartValue =JSON.parse(localStorage.getItem('localCart')!)  ;

    this.cartNumber=cartValue.length ;
   // console.log(this.cartNumber);
   this.auth.cartSubject.next(this.cartNumber);



  }
  //sidebar cart
  getCartDetails:any[]=[];

  CartDetails(){
    if(localStorage.getItem('localCart'))
    {
this.getCartDetails= JSON.parse(localStorage.getItem('localCart')!);
this.auth.sidebarcart.next(this.getCartDetails);

//console.log(this.getCartDetails);



    }

  }
  //category

  filter(category:any){
    this.filterCategory=this.productLists
    .filter((a:any)=>{
      if(
       // a.category == category || category==''
        a.category == category ||
        a.subCategory1 == category ||
        a.subCategory2 == category

        ){
        return a ;
      }
    })

  }

}
