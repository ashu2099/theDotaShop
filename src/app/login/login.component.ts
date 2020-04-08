import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppDataService } from "../app-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  wrongPass: boolean = false;

  constructor(private router: Router, private ADS: AppDataService) {}

  ngOnInit() {}

  submitLogin(a) {
    if (this.ADS.get("users")[this.userName] == this.password) {
      this.ADS.set("userID", this.userName);

      let routeToGo = "/home";

      if (this.ADS.get("routeToGoAfterLogin")) {
        routeToGo = this.ADS.get("routeToGoAfterLogin");
        this.ADS.set("routeToGoAfterLogin", null);
      }

      this.router.navigate([routeToGo]);
      this.ADS.get("logEvent").emit(this.userName);
      this.ADS.popLogin(1);
    } else {
      this.wrongPass = true;
    }
  }

  closeModalAndReroute() {
    this.ADS.popLogin(1);
    this.router.navigate(["/home"]);
  }
}
