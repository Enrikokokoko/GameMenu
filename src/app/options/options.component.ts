import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  volume: number = 1

  constructor(private menuService: MenuService) {}

  onVolumeChange(): void {
    this.menuService.setVolume(this.volume)
  }
}
