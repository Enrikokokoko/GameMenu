import { Component } from '@angular/core';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css']
})
export class SelectHeroComponent {
  playSoundKatana() {
    const selectButton = new Audio('assets/audio/weapon/leo-weapon.mp3')
    selectButton.play()
  }

  playSoundNunchucks() {
    const selectButton = new Audio('assets/audio/weapon/miche-weapon.mp3')
    selectButton.play()
  }

  playSoundSai() {
    const selectButton = new Audio('assets/audio/weapon/raph-weapon.mp3')
    selectButton.play()
  }

  playSoundStick() {
    const selectButton = new Audio('assets/audio/weapon/done-weapon.mp3')
    selectButton.play()
  }

  playVoiceLeonardo() {
    const voiceButton = new Audio('assets/audio/phrase/Leonardo-phrase.mp3')
    voiceButton.play()
  }

  playVoiceMicke() {
    const voiceButton = new Audio('assets/audio/phrase/Micke-phrase.mp3')
    voiceButton.play()
  }

  playVoiceRaphe() {
    const voiceButton = new Audio('assets/audio/phrase/Raphe-phrase.mp3')
    voiceButton.play()
  }

  playVoiceDone() {
    const voiceButton = new Audio('assets/audio/phrase/Done-phrase.mp3')
    voiceButton.play()
  }
}
