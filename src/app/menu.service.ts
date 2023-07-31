import { Injectable } from '@angular/core';
import { Slots } from './hero';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

private keysyks = 'Kluchikse'

private activeSlot: Slots | null = null;

public slots : Slots[]= [
  { slotId: 1, hero: null, saveData: null, img: '/assets/save-icon/unknown.png', timer: 0, passage: '0 %' },
  { slotId: 2, hero: null, saveData: null, img: '/assets/save-icon/unknown.png', timer: 0, passage: '0 %' },
  { slotId: 3, hero: null, saveData: null, img: '/assets/save-icon/unknown.png', timer: 0, passage: '0 %' },
  { slotId: 4, hero: null, saveData: null, img: '/assets/save-icon/unknown.png', timer: 0, passage: '0 %' }
]
  constructor() {
    this.loadData();
  }
  private loadData() {
    let data = localStorage.getItem(this.keysyks)
    if(!data) {
      console.log('null');
    }else {
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
    localStorage.setItem(this.keysyks, JSON.stringify(this.slots))
  }

  playHover() {
    const hoverButton = new Audio('assets/audio/hover.mp3') 
    hoverButton.play()
  }

  playClick(active: Slots) {
    this.activeSlot = active
  }

  playSound() {
    const clickButton = new Audio('assets/audio/click.mp3') 
    clickButton.play()
  }

  getActiveSlot(): Slots | null {
     return this.activeSlot;
  }

  playClose() {
    const closeButton = new Audio('assets/audio/close.mp3')
    closeButton.play()
  }

  onActivateSlotClick(active: Slots) {
    active.start = Date.now();
    this.activeSlot = active;
  }

  formatTime(milSecond: number) {
    const formatedTime = format(new Date(0, 0, 0, 0, 0, milSecond), 'HH:mm:ss')
    return formatedTime
  }

  finishGame(): void {
    if (!this.activeSlot || !this.activeSlot.start) return;

    const timer = (Date.now() - this.activeSlot.start) / 1000;
    this.activeSlot.timer += timer; 
    this.activeSlot.storageTime = this.formatTime(this.activeSlot.timer)
    console.log(this.activeSlot.storageTime);
  }
}


