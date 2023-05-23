import { startTimer, resetTimer } from "./timer.js"
import getClicks from "./get-clicks.js"
function startGameEventFunc() {
	window.removeEventListener('startGameEvent', startGameEventFunc)
	window.addEventListener('endGameEvent', endGameEventFunc)
	getClicks(true)
	startTimer()
}
function endGameEventFunc() {
	window.removeEventListener('endGameEvent', endGameEventFunc)
	window.addEventListener('startGameEvent', startGameEventFunc)
	getClicks(false)
	resetTimer()
}

export { startGameEventFunc, endGameEventFunc }