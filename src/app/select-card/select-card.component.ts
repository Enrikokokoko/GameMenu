import { Component } from '@angular/core';
import { Slots } from '../hero';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent {
  
  timerRunning = false;
  timerValue = 0;
  timer: any = null; 

  slots: Slots[] = []; 

  constructor(private menuService: MenuService, private rt: Router) {
}

  
  ngOnInit() {
    this.slots = this.menuService.getSlots();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startTimer() {
    if(this.timerRunning = true) {
      
    }
  }

  onActivateSlotClick(active: Slots) {
      this.menuService.onActivateSlotClick(active)
      this.rt.navigateByUrl('/menu/new-game/confirm');
  }

  saveData(slot: Slots) {
    this.menuService.saveData(slot);
    this.menuService.playClick(slot)
  }

  playHover() {
    this.menuService.playHover()
  }

  playClick(active: Slots) {
    this.menuService.playClick(active)
  }
}
