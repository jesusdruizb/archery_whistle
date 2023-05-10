import {delay} from "./utils";
export class Timer {

    counter: number
    timerField: HTMLElement
    constructor(counter: number, htmlTimerField: HTMLElement) {
        this.counter = counter
        this.timerField = htmlTimerField
    }

    async doTimer() {
        let countDown = this.counter
        for (let i = 0; i < this.counter; i++) {
            await delay(1000);
            countDown = countDown - 1;
            this.timerField.innerHTML = <string><unknown>countDown
        }

    }
}