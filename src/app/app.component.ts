import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameMenu';

  user: any;
  loggedIn: any;
  log: any

  volume: number = 1

  constructor(private authService: SocialAuthService, private menuService: MenuService) { }

  
  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);    
    });

    this.menuService.volume$.subscribe((volume) => {
      this.volume = volume
    })
  }
}
