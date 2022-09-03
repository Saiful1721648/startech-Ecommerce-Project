import { LoginComponent } from './../login/login.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartupdateService } from 'src/app/services/cartupdate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchTerm:string='';

  constructor(private cartService :CartupdateService ) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);


  }

}
