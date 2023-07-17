import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent {
  constructor(private menuService: MenuService) {}
  playHover() {
    this.menuService.playHover()
  }

  playClose() {
    this.menuService.playClose()
  }
}
