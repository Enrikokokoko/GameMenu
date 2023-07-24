import { Injectable } from '@angular/core';
import { Slots } from './hero';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

private privateKey = 'Smth new'

private slots : Slots[]= [
  { slotId: 1, hero: null, saveData: null },
  { slotId: 2, hero: null, saveData: null },
  { slotId: 3, hero: null, saveData: null },
  { slotId: 4, hero: null, saveData: null }
]
  constructor() {
    this.loadData();
  }
  private loadData() {
    let data = localStorage.getItem(this.privateKey)
    console.log(data);
    if(!data) {
      console.log('null');
      
    }else {
      console.log('raw', data);
      console.log('parsed', JSON.parse(data));
      this.slots = JSON.parse(data);
    }
  }  

  getSlots(): Slots[] {
    return this.slots;
  }

  saveData(slot: Slots) {
    let currentSlotIdx = this.slots.findIndex(v => v.slotId === slot.slotId);
    slot.saveData = new Date();
    this.slots[currentSlotIdx] = slot;
    localStorage.setItem(this.privateKey, JSON.stringify(this.slots))
  }


  playHover() {
    const hoverButton = new Audio('assets/audio/hover.mp3') 
    hoverButton.play()
  }

  playClick() {
    const clickButton = new Audio('assets/audio/click.mp3') 
    clickButton.play()
  }

  playClose() {
    const closeButton = new Audio('assets/audio/close.mp3')
    closeButton.play()
  }
}
