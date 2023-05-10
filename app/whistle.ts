import {delay} from "./utils";

export class Whistle{

    soundFile: HTMLAudioElement
    numberOfConsecutiveWhistles: number

    constructor(soundFile: HTMLAudioElement, numberOfConsecutiveWhistles: number) {
        this.soundFile = soundFile
        this.numberOfConsecutiveWhistles = numberOfConsecutiveWhistles
    }

    async whistle(){
        let count = 1
        let whistleAmount = this.numberOfConsecutiveWhistles
        await this.soundFile.play()
        this.soundFile.addEventListener('ended', function(){
            this.currentTime = 0;
            if(count < whistleAmount){
                this.play();
            }
            count++;
        }, false)

    }
}