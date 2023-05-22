let interval
let seconds = 0
let mseconds = 0

function timer() {
	const time = document.querySelector('.minesweeper__timer-time')
	mseconds++
	if (mseconds > 99) {
		seconds++
		time.textContent = '00' + seconds
		mseconds = 0
	}
	if (seconds > 9) {
		time.textContent = '0' + seconds
	}
	if (seconds > 99) {
		time.textContent = seconds
	}
}

function startTimer() {
	clearInterval(interval)
	interval = setInterval(timer, 10)
}

function resetTimer() {
	const time = document.querySelector('.minesweeper__timer-time')
	clearInterval(interval)
	seconds = 0
	mseconds = 0
	time.textContent = '000'
}

export { startTimer, resetTimer }