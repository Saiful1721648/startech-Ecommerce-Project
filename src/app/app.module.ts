import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OnepagecheckoutComponent } from './components/onepagecheckout/onepagecheckout.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from '@angular/cdk/dialog';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { ForgotPasswardComponent } from './components/forgot-passward/forgot-passward.component';
import { FliterPipe } from './shared/fliter.pipe';
import { MenycategoryPipe } from './shared/menycategory.pipe';
import { FooterComponent } from './components/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OnepagecheckoutComponent,
    ViewProductComponent,
    DialogExampleComponent,
    LoginComponent,
    RegisterAccountComponent,
    ForgotPasswardComponent,
    FliterPipe,
    MenycategoryPipe,
    FooterComponent





  ],
  entryComponents:[
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    DialogModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  exports:[
    MatDialogModule,
    DialogModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
