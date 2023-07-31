import { Component } from '@angular/core';
import { Slots } from '../hero';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-load-game',
  templateUrl: './load-game.component.html',
  styleUrls: ['./load-game.component.css']
})
export class LoadGameComponent {
  slots: Slots[] = []

  constructor(private menuService: MenuService) {}


  ngOnInit() {
    this.useData() 
  }

  useData() {
    this.slots = this.menuService.slots
  }

  playSound() {
    this.menuService.playSound()
  }
  
  playHover() {
    this.menuService.playHover()
  }
}
