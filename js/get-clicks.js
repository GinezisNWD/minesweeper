function getClicks(state) {
	const field = document.querySelector('.minesweeper__game-field')
	const clicksCounter = document.querySelector('.minesweeper__clicks-counter')
	if (!state) {
		clicksCounter.textContent = 0
		return
	}

	let counter = 0
	counter++
	clicksCounter.textContent = 1


	if (counter === 1) {
		if (document.querySelector('.minesweeper__sound-chebox').classList.contains('_active')) {
			const clickSound = new Audio('../assets/audio/click.mp3')
			clickSound.volume = 0.6
			clickSound.play()
		}
	}
	field.addEventListener('click', test)
	function test(e) {
		if (e.target.classList.contains('minesweeper__ingame-btn_flaged')) {
			return
		}

		if (e.target.classList.contains('minesweeper__ingame-btn')) {
			if (document.querySelector('.minesweeper__sound-chebox').classList.contains('_active')) {
				const clickSound = new Audio('../assets/audio/click.mp3')
				clickSound.volume = 0.6
				clickSound.play()
			}
			counter++
			clicksCounter.textContent = counter
		}
	}
}

export default getClicks