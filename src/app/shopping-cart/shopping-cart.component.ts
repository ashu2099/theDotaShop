import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppDataService } from "../app-data.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  cartData;
  totalBill;

  constructor(private router: Router, private ADS: AppDataService) {}

  ngOnInit() {
    this.cartData = this.ADS.get("productCart");
    this.calculateTotal();
  }

  removeFromCart(index) {
    this.cartData.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalBill = 0;
    for (let x of this.cartData) {
      this.totalBill = this.totalBill + x.productPrice;
    }
  }

  placeOrder() {
    this.ADS.set("totalBill", this.totalBill);
    this.router.navigate(["/placeOrder"]);
  }
}
