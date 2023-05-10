
export interface ArcheryTimerInterface {
    initialCountdownSeconds: number
    mainCountdownSeconds: number
    finalArrowSeconds: number
    whistleSound?: HTMLAudioElement
    startCountdown: () => void

}