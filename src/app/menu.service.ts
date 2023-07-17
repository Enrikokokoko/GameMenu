import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {}

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
