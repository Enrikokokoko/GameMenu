import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  constructor(private menuService: MenuService) {}
  playHover() {
    this.menuService.playHover()
  }

  playClick() {
    this.menuService.playClick()
  }
}
