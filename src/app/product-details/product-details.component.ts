import { Component, OnInit } from "@angular/core";
import { AppDataService } from "../app-data.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: any = {};

  constructor(private ADS: AppDataService) {}

  ngOnInit() {
    this.ADS.get("selectedProduct")
      ? (this.selectedProduct = this.ADS.get("selectedProduct"))
      : this.ADS.redirectToHome();
  }

  addToCart() {
    if (this.ADS.get("userID")) {
      this.ADS.get("productCart").push(this.selectedProduct);
      this.ADS.triggerPopup("Product is added to your shopping cart.");
    } else {
      this.ADS.triggerPopup(
        "You are not Logged In! Please Log in to add this product to your cart."
      );
    }
  }
}
