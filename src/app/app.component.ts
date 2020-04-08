import { Component, OnInit, HostListener } from "@angular/core";
import { AppDataService } from "./app-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private ADS: AppDataService) {}

  userID: string;

  ngOnInit() {
    this.ADS.get("logEvent").subscribe((userID) => {
      this.userID = userID;
    });
  }

  logInOrOut() {
    if (this.userID) {
      this.ADS.purgeData();
    } else {
      this.ADS.popLogin();
    }
  }

  @HostListener("window:scroll")
  handleNavBarEffect() {
    let navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 16 ||
      document.documentElement.scrollTop > 16
    ) {
      navbar.classList.remove("navbar-big");
    } else {
      navbar.classList.add("navbar-big");
    }
  }
}
