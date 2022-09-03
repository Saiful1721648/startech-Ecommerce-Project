import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';
import { ViewProductComponent } from '../view-product/view-product.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  products: any;



  constructor(
    public dialog:MatDialog,
    public apiService: ApiService,
    @Inject(MAT_DIALOG_DATA)
    public data: Product,public dialogRef: MatDialogRef<DialogExampleComponent>
   ) { }



  ngOnInit(): void {
    this.products = this.data;

  }

  ngOnDestroy(): void {


  }




}
