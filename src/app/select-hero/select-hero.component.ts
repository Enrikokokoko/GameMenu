import { Component } from '@angular/core';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css']
})
export class SelectHeroComponent {
  playSoundKatana() {
    const selectButton = new Audio('assets/audio/leo-weapon.mp3')
    selectButton.play()
  }

  playSoundNunchucks() {
    const selectButton = new Audio('assets/audio/miche-weapon.mp3')
    selectButton.play()
  }

  playSoundSai() {
    const selectButton = new Audio('assets/audio/raph-weapon.mp3')
    selectButton.play()
  }

  playSoundStick() {
    const selectButton = new Audio('assets/audio/done-weapon.mp3')
    selectButton.play()
  }

  playVoiceLeonardo() {
    const voiceButton = new Audio('assets/audio/Leonardo-phrase.mp3')
    voiceButton.play()
  }
}
