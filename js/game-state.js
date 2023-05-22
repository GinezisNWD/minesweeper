import { startTimer, resetTimer } from "./timer.js"
function startGameEventFunc() {
	window.removeEventListener('startGameEvent', startGameEventFunc)
	window.addEventListener('endGameEvent', endGameEventFunc)
	startTimer()
}
function endGameEventFunc() {
	window.removeEventListener('endGameEvent', endGameEventFunc)
	window.addEventListener('startGameEvent', startGameEventFunc)
	resetTimer()
}

export { startGameEventFunc, endGameEventFunc }