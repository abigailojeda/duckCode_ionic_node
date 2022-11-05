import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public showPass:boolean;
  public showPassControl:boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.showPass=false;
    this.showPassControl=false;
  }
  register(form) {
    let user: User = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: form.value.name,
      isAdmin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

  public tooglePass(){
    this.showPass = !this.showPass;
  }
  public tooglePassControl(){
    this.showPassControl = !this.showPassControl;
  }

}
