import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BackendHandlerService {
  private MAIN_ENDPOINT = "http://main Endpoint";
  private LOGIN = this.MAIN_ENDPOINT + "/path/login handler at backend";
  //define you endpoiunts like this

  //inject BackendHandlerService into other components like this, in the constructor.
  //like I have done with HTTP client.
  constructor(private http: HttpClient) {}

  //for Each Service/API/ Extraction Call you have at backend, make a method like this for each one.
  logIn(userNameFromComponent, passwordFromComponent) {
    let request = {
      username: userNameFromComponent,
      password: passwordFromComponent,
    };

    //use your endpoints like this and then subscribe to this method in the component.
    return this.http.post(this.LOGIN, request);
  }

  /*To Somesh Bhaiiya:
  Sasur hamse jo ho sakat raha ham kar diye haye. ab backend ka tu jana.
  with warm regards and brotherly love,
  Ashutosh Dwivedi.
  */
}
