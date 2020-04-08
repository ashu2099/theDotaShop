import { Injectable, EventEmitter } from "@angular/core";
declare let $: any;

@Injectable({
  providedIn: "root",
})
export class AppDataService {
  constructor() {}

  private data = {
    users: {
      ashu: "1234",
    },
    productCart: [],
    logEvent: new EventEmitter(),
  };

  get(prop) {
    return this.data[prop];
  }

  set(name, prop) {
    this.data[name] = prop;
  }

  triggerPopup(message) {
    $("#notifyMsg").text(message);
    $("#notifyModal").modal("show");
  }

  popLogin(param?) {
    $("#loginModal").modal(param ? "hide" : "show");
  }

  purgeData() {
    for (let key in this.data) {
      if (["users", "productCart", "logEvent"].indexOf(key) == -1) {
        delete this.data[key];
      }
    }
    this.data.logEvent.emit();
    this.redirectToHome();
  }

  redirectToHome() {
    window.location.hash = "#/home";
  }
}
