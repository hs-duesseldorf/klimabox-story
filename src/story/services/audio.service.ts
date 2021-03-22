import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audioContext: AudioContext;
  volumeControl: GainNode;
  loops: MediaElementAudioSourceNode[] = [];

  constructor() {
    this.audioContext = new AudioContext();
    this.volumeControl = this.audioContext.createGain();
    this.volumeControl.connect(this.audioContext.destination);
  }


  play(filePath: string) {

  }

  playLoop(filePath: string) {
    let audio = new Audio(filePath);
    let audioSource = this.audioContext.createMediaElementSource(audio);
    audioSource.connect(this.volumeControl);
    audio.loop = true;
    audio.play();
  }

  stop() {

  }

  mute() {
    this.volumeControl.gain.value = 0;
  }

  unmute() {
    this.volumeControl.gain.value = 1;
  }
}
