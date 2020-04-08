import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppDataService } from "../app-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  products = [
    {
      productId: "aghanimSceptre",
      productImage: "assets/AS.png",
      productName: "Aghanim's Sceptre",
      productDesc: `Aghanim was a mighty wizard whose abilities
       approached that of a demi-god. And whosoever shall own his sceptre, will own agahnim's might.`,
      productPrice: 4200,
    },
    {
      productId: "blackKingBar",
      productImage: "assets/BKB.png",
      productName: "Black King Bar",
      productDesc: `A powerful staff imbued with the strength of giants.
       This can be a double edged sword, due to the reduced duration of magic immunity.`,
      productPrice: 4050,
    },
    {
      productId: "heartOfTarrasque",
      productImage: "assets/HOT.png",
      productName: "Heart of Tarrasque",
      productDesc: `Preserved heart of an extinct monster, it bolsters the bearer's fortitude. 
      With it's valves still pumping magic, it can fully regenerate the wielder's health.`,
      productPrice: 5150,
    },
    {
      productId: "abyssalBlade",
      productImage: "assets/AB.png",
      productName: "Abyssal Blade",
      productDesc: `The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul. `,
      productPrice: 6625,
    },
    {
      productId: "eyeOfSkadi",
      productImage: "assets/EOS.png",
      productName: "Eye Of Skadi",
      productDesc: `Skadi is a goddess. Extremely rare artifact, guarded by the azure dragons. `,
      productPrice: 5500,
    },
    {
      productId: "scytheOfVyse",
      productImage: "assets/SOV.png",
      productName: "Scythe of Vyse",
      productDesc: `The divine relic among the cult of Vyse, it is the most coveted weapon among magi.`,
      productPrice: 5675,
    },
  ];

  constructor(private router: Router, private ADS: AppDataService) {}

  ngOnInit() {}

  viewProduct(product) {
    this.ADS.set("selectedProduct", product);
    this.router.navigate(["/productDetails"]);
  }
}
