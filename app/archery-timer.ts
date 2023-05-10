import {ArcheryTimerInterface} from "./interfaces/archery-timer-interface";
import {Timer} from "./timer";
import {Whistle} from "./whistle";
export class ArcheryTimer implements ArcheryTimerInterface {
    initialCountdownSeconds: number;
    mainCountdownSeconds: number;
    finalArrowSeconds: number;
    whistleSound: HTMLAudioElement;
    timerField: HTMLElement
    initialTimerField: HTMLElement
    constructor() {
        this.initialCountdownSeconds = 10
        this.mainCountdownSeconds = 15
        this.finalArrowSeconds = 20
        this.whistleSound = new Audio('./app/audio/whistle.mp3');
        this.timerField = document.getElementById('timer')!
        this.initialTimerField = document.getElementById('initialTimer')!

    }
        async startCountdown() {

            let initialCountDownCounter: Timer = new Timer(this.initialCountdownSeconds, this.initialTimerField)
            let mainCountDownCounter: Timer = new Timer(this.mainCountdownSeconds, this.timerField)
            let initialWhistle: Whistle = new Whistle(this.whistleSound, 2)
            let singleWhistle: Whistle = new Whistle(this.whistleSound, 1)
            let finalWhistle: Whistle = new Whistle(this.whistleSound, 3)

            await initialWhistle.whistle()
            await initialCountDownCounter.doTimer()
            await singleWhistle.whistle()
            await mainCountDownCounter.doTimer()
            await finalWhistle.whistle()
    }
}