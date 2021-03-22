import { Component, OnInit } from '@angular/core';
import {AudioService} from '../services/audio.service';

@Component({
  selector: 'app-sound-option',
  templateUrl: './sound-option.component.html',
  styleUrls: ['./sound-option.component.css']
})
export class SoundOptionComponent implements OnInit {

  isSoundOn: boolean = true;
  soundIconPath: string = "";

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.soundIconPath = this.getSoundIcon();
  }

  toggleSound() {
    this.isSoundOn = !this.isSoundOn;
    this.soundIconPath = this.getSoundIcon();
    this.isSoundOn? this.audioService.unmute(): this.audioService.mute();
  }

  getSoundIcon(): string {
    return this.isSoundOn? "/assets/images/sound/icon_sound_is_on.png" : "/assets/images/sound/icon_sound_is_off.png";
  }
}
