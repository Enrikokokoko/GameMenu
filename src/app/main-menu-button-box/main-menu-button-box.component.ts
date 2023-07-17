import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-main-menu-button-box',
  templateUrl: './main-menu-button-box.component.html',
  styleUrls: ['./main-menu-button-box.component.css']
})
export class MainMenuButtonBoxComponent {
  constructor(private menuService: MenuService) {}
  playHover() {
    const hoverButton = new Audio('assets/audio/select-menu.mp3')
    hoverButton.play()
  }

  playClick() {
    this.menuService.playClick()
  }
}
