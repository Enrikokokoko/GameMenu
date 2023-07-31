import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Slots } from '../hero';

@Component({
  selector: 'app-main-menu-button-box',
  templateUrl: './main-menu-button-box.component.html',
  styleUrls: ['./main-menu-button-box.component.css']
})
export class MainMenuButtonBoxComponent {

  slots: Slots[] = []

  isDisabledButton: boolean = true

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.useData() 
  }
  
  useData() {
    this.slots = this.menuService.slots
    this.checkDisabled()
  }

  checkDisabled() {
    for(let slot of this.slots) {
      if(slot.saveData != null) {
        this.isDisabledButton = false
        return
      }
    }
  }

  playHover() {
    const hoverButton = new Audio('assets/audio/select-menu.mp3')
    hoverButton.play()
  }

  playSound() {
    this.menuService.playSound()
  }



}
