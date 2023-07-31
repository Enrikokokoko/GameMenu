import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MainMenuButtonBoxComponent } from './main-menu-button-box/main-menu-button-box.component';
import { NewGameComponent } from './new-game/new-game.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { OptionsComponent } from './options/options.component';
import { DetailsComponent } from './details/details.component';
import { ExitComponent } from './exit/exit.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmSelectionComponent } from './confirm-selection/confirm-selection.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { GoogleQauthComponent } from './google-qauth/google-qauth.component';
import { MenuService } from './menu.service';
import { SelectCardComponent } from './select-card/select-card.component'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MainMenuButtonBoxComponent,
    NewGameComponent,
    LoadGameComponent,
    OptionsComponent,
    DetailsComponent,
    ExitComponent,
    SelectHeroComponent,
    ConfirmComponent,
    ConfirmSelectionComponent,
    SplashScreenComponent,
    GoogleQauthComponent,
    SelectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [ MenuService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1056380270647-hvihudd73me1ugmf2ql6o250jfbqgjpj.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
