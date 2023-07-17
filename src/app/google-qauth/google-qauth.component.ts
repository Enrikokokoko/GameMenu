import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';


@Component({
  selector: 'app-google-qauth',
  templateUrl: './google-qauth.component.html',
  styleUrls: ['./google-qauth.component.css']
})
export class GoogleQauthComponent {
  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);    
    });
  }
}
