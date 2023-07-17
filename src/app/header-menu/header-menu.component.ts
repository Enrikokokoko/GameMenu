import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  constructor(private menuService: MenuService) {}

  playClose() {
    this.menuService.playClose();
  }
}
