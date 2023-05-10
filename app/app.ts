import {ArcheryTimer} from "./archery-timer";

document.getElementById('start')!.addEventListener('click', async () => {
    const timer: ArcheryTimer = new ArcheryTimer()
    await timer.startCountdown()

})