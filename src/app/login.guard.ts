import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AppDataService } from "./app-data.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private ADS: AppDataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.ADS.get("userID")) {
      return true;
    } else {
      console.log("Denied!");
      this.ADS.set("routeToGoAfterLogin", state.url);
      this.ADS.popLogin();
      return false;
    }
  }
}
