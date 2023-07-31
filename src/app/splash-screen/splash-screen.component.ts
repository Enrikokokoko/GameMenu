import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  constructor(private menuService: MenuService) {}

  finishGame(): void {
    return this.menuService.finishGame();
  };
}
