import {Howl, Howler} from 'howler';

export class Music{
    isPause:boolean;
    h:Howl;
    
    constructor(lien:string){
        this.h=new Howl({
            src:[lien],
            format:['mp3'],
            html5: true,
            autoplay:false,
            volume: 0.5,
          });
        this.isPause=true;
    }

    onSwitch(){
        this.isPause=!this.isPause;
    }

    getState(){
        return this.isPause;
    }

    onPlay(){
        this.h.play();
        this.onSwitch();
      }
    
    onPause(){
        this.h.pause();
        this.onSwitch();
      }
    
      onStop(){
        this.h.stop();
        this.onSwitch();
      }
    
      onMute(){
        this.h.mute();
      }

      getHowl(){
          return this.h;
      }
}
