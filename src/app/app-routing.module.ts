import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnepagecheckoutComponent } from './components/onepagecheckout/onepagecheckout.component';

const routes: Routes = [
  {path: "",component:HomeComponent},

  {path: "shoppingCart",component:ShoppingCartComponent},
  {path:"onepagecheckout",component:OnepagecheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
