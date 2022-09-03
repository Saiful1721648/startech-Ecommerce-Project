import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnepagecheckoutComponent } from './components/onepagecheckout/onepagecheckout.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { ForgotPasswardComponent } from './components/forgot-passward/forgot-passward.component';

const routes: Routes = [
  {path: "",component:HomeComponent},

  {path: "shoppingCart",component:ShoppingCartComponent},
  {path:"onepagecheckout",component:OnepagecheckoutComponent},
  {path:"viewProduct",component: ViewProductComponent},
  {path:"logIn", component:LoginComponent},
  {path:"register-account", component:RegisterAccountComponent},
  {path:"forgot-passward",component:ForgotPasswardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
