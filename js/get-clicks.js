function getClicks(state) {
	const field = document.querySelector('.minesweeper__game-field')
	const clicksCounter = document.querySelector('.minesweeper__clicks-counter')
	if (!state) {
		clicksCounter.textContent = 0
		return
	}

	let counter = 0
	clicksCounter.textContent = 1
	counter++

	field.addEventListener('click', test)
	function test(e) {
		if (e.target.classList.contains('minesweeper__ingame-btn')) {
			counter++
			clicksCounter.textContent = counter
		}
	}
}

export default getClicks