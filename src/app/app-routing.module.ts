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

const routes: Routes = [ 
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MainMenuButtonBoxComponent, title: 'Mine menu'},
  { path: 'newGame', component: NewGameComponent, title: 'New game'},
  { path: 'loadGame', component: LoadGameComponent, title: 'Load game'},
  { path: 'options', component: OptionsComponent, title: 'Options'},
  { path: 'details', component: DetailsComponent, title: 'Details'},
  { path: 'exit', component: ExitComponent, title: 'Exit'},
  { path: 'confirm', component: ConfirmComponent, title: 'Confirm your selection'},
  { path: 'selectHero', component: SelectHeroComponent, title: 'Select hero'},
  { path: 'confirmSelection', component: ConfirmSelectionComponent, title: 'Confirm selection'},
  { path: 'screen', component: SplashScreenComponent, title: 'Loading'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
