import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { Slots } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  activeSlot: Slots = null as any;
  
  constructor(private menuService: MenuService, private rt: Router) {
  }

  ngOnInit() {
    this.useData()
  }

  useData() {
    this.activeSlot = this.menuService.getActiveSlot() as Slots;
    console.log(this.activeSlot);

  }


  playClick() {
    this.menuService.saveData(this.activeSlot);
    this.rt.navigateByUrl("/menu/new-game/select-hero")
  }

  playClose() {
    this.menuService.playClose()
    this.rt.navigateByUrl("/menu/new-game/select-card")
  }

  playHover() {
    this.menuService.playHover()
  }


  
}
