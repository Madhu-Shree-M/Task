import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Route[] = [

  {path:'' , component :CartListComponent},
  {path:'product-details/:id', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
