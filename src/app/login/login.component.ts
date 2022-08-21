import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { IMAGE_URL, LOGO } from "../service/url";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private Authservice : AuthService,
    private router: Router,
  ) {}
  IMAGE_URL = IMAGE_URL;
  LOGO = LOGO;
  
  ngOnInit(): void {
    this.Authservice.signOut();
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    let username = btoa(this.loginForm.value.username);
    let password = btoa(this.loginForm.value.password);
    this.Authservice.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem(
        "name",
     
        res.data.name,
      
      );
      localStorage.setItem(
      
      
          'token', res.data.token,
        
      
      );
      
      this.router.navigate(["./home"]);
    
      
    });
  }
}
