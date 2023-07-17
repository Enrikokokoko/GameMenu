import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  constructor(private menuService: MenuService) {}

  playClick() {
    this.menuService.playClick()
  }

  playClose() {
    this.menuService.playClose()
  }
}
