import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userStorage: any;
  menuType: string = 'overlay';
  constructor(
    private router: Router,
    private UserService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userStorage = this.UserService.userStorage;

  }

  getUserName(){
    let username;
    username=this.userStorage.currentUser.username;
    console.log('username:',username)
    return username;
  }

  logout() {
    this.authService.logout().then(() => {

      this.router.navigateByUrl("/login");
    });
  }

}
