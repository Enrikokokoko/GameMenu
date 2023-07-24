import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { Hero, Slots } from '../hero';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent  {
  
  slots: Slots[] = [
    { slotId: 1, hero: null },
    { slotId: 2, hero: null },
    { slotId: 3, hero: null },
    { slotId: 4, hero: null },
  ]; 

  creationDate: Date;

  constructor(private menuService: MenuService) {
    this.creationDate = new Date();
  }
  playHover() {
    this.menuService.playHover()
  }

  playClick() {
    this.menuService.playClick()
  }

  @Input() hero?: Hero
  
}
