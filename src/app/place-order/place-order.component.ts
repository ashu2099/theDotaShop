import { Component, OnInit } from "@angular/core";
import { AppDataService } from "../app-data.service";
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: "app-place-order",
  templateUrl: "./place-order.component.html",
  styleUrls: ["./place-order.component.css"],
})
export class PlaceOrderComponent implements OnInit {
  cartData: any;
  totalBill: any;
  paymentMethod: any = "debitCard";
  address: any = "address";

  constructor(private router:Router, private ADS: AppDataService) {}

  ngOnInit() {
    this.enableValidation();
    this.cartData = this.ADS.get("productCart");
    this.totalBill = this.ADS.get("totalBill");
  }

  enableValidation() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  paymentChanged() {
    this.paymentMethod = $("input[name=paymentMethod]:checked").val();
  }

  addressChanged() {
    this.address = $("input[name=address]:checked").val();
  }

  confirmPurchase() {
    if ($(".invalid-feedback").length == 0) {
      this.ADS.triggerPopup(
        "Congratulations! Your order has been placed! You will be taken to the homepage. Feel free to shop more!"
      );
      this.ADS.set("productCart",[]);
      this.router.navigate(["home"]);
    }
  }
}
