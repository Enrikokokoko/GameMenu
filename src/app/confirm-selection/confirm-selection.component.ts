import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-confirm-selection',
  templateUrl: './confirm-selection.component.html',
  styleUrls: ['./confirm-selection.component.css']
})
export class ConfirmSelectionComponent {

  constructor(private menuService: MenuService) {}

  playSound() {
    this.menuService.playSound()
  }

  playClose() {
    this.menuService.playClose()
  }
}
