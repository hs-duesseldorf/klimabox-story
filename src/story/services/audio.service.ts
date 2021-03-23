import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audioContext: AudioContext;
  mainVolumeControl: GainNode;
  loops: MediaElementAudioSourceNode[] = [];

  constructor() {
    this.audioContext = new AudioContext();
    this.mainVolumeControl = this.audioContext.createGain();
    this.mainVolumeControl.connect(this.audioContext.destination);
  }

  play(filePath: string) {
    let audio = new Audio(filePath);
    let audioSource = this.audioContext.createMediaElementSource(audio);
    audioSource.connect(this.mainVolumeControl);
    audio.play();
  }

  playLoop(filePath: string) {
    let audio = new Audio(filePath);
    let audioSource = this.audioContext.createMediaElementSource(audio);
    audioSource.connect(this.mainVolumeControl);
    audio.loop = true;
    audio.play();
    this.loops.push(audioSource);
  }

  stopLoops() {
    this.loops.forEach(loop => {
      loop.mediaElement.pause();
      loop.disconnect()
    });
  }

  mute() {
    this.mainVolumeControl.gain.value = 0;
  }

  unmute() {
    this.mainVolumeControl.gain.value = 1;
  }
}
