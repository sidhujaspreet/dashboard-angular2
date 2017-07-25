import { Component } from '@angular/core';
import { LoginService } from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  title = 'app works!';
  username: string = '';
  password: string = '';
  
  userData = "";
  
  constructor(private loginService:LoginService){}
  
  onLoginClick() {
    let userData = this.username + ':' + this.password;
    this.loginService.login(userData)
        .subscribe(
            data => this.processSuccessData(data),
            error => alert(error),
            () => console.log("Finished!"),
        );
  }
  
  processSuccessData(data) {
    if(data.success == true) {
      localStorage.setItem('userToken', data.token);
      console.log("Success!!! " + data.token);
    } else {
      console.log(data.Message);
    }
  }
}
