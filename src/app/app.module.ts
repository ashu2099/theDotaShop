import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { PageComponent } from "./page/page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    PlaceOrderComponent,
    PageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
