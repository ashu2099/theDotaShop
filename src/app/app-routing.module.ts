import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PageComponent } from "./page/page.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { LoginGuard } from "./login.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "productDetails", component: ProductDetailsComponent },
  {
    path: "cart",
    component: ShoppingCartComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "placeOrder",
    component: PlaceOrderComponent,
    canActivate: [LoginGuard],
  },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
