import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { OptionsComponent } from './options/options.component';
import { ExitComponent } from './exit/exit.component';
import { DetailsComponent } from './details/details.component';
import { MainMenuButtonBoxComponent } from './main-menu-button-box/main-menu-button-box.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmSelectionComponent } from './confirm-selection/confirm-selection.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { GoogleQauthComponent } from './google-qauth/google-qauth.component';
import { SelectCardComponent } from './select-card/select-card.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MainMenuButtonBoxComponent, title: 'Mine menu'},
    { path: 'menu/new-game', component: NewGameComponent, title: 'New game', children: [
      {
        path: 'confirm',
        component: ConfirmComponent, 
        title: 'Confirm your selection'
      },
      {
        path: 'select-hero',
        component: SelectHeroComponent,
        title: 'Select hero'
      },
      {
        path: 'select-hero/confirm-selection',
        component: ConfirmSelectionComponent, 
        title: 'Confirm selection'
      },
      {
        path: 'select-hero/screen',
        component: SplashScreenComponent, 
        title: 'Loading'
      },
      {
        path: 'select-card',
        component: SelectCardComponent,
      },]},
    { path: 'menu/loadGame', component: LoadGameComponent, title: 'Load game'},
    { path: 'menu/options', component: OptionsComponent, title: 'Options'},
    { path: 'menu/details', component: DetailsComponent, title: 'Details'},
    { path: 'menu/exit', component: ExitComponent, title: 'Exit'},
    { path: 'login', component: GoogleQauthComponent},
    { path: '', component: GoogleQauthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
