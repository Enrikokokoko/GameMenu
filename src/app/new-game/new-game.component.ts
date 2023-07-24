import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { Hero, Slots } from '../hero';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent  {
  
  slots: Slots[] = []; 

  creationDate: Date;

  constructor(private menuService: MenuService) {
    this.creationDate = new Date();
  }
  ngOnInit()
  {
    this.slots = this.menuService.getSlots();
    console.log("this.slots", this.slots);
    
  }
  saveData(slot: Slots) {
    this.menuService.saveData(slot);
  }
  playHover() {
    this.menuService.playHover()
  }

  playClick() {
    this.menuService.playClick()
  }

  @Input() hero?: Hero
  
}
