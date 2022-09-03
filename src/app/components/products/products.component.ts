import { SubCategory1 } from './../../model/product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartupdateService } from 'src/app/services/cartupdate.service';
import { Category, Product, SubCategory2 } from 'src/app/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productLists: Product[] = [];
  category: Category[] = [];
  subCategory1: SubCategory1[] = [];
  subCategory2: SubCategory2[] = [];


  @Output() clickProduct=new EventEmitter<any>()



  constructor(private auth :CartupdateService,private apiService: ApiService) { }

  ngOnInit(): void {
    this.productLists = this.apiService.getProducts();
    this.category = this.apiService.getCategories();
    this.subCategory1 = this.apiService.getSubCategory1();
    this.subCategory2 = this.apiService.getSubCategory2();

  }

  catgoryMenu(category:any){
    this.clickProduct.emit(category)
  }





}
