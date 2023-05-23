import renderEndGameMessage from "./render-end-game-message.js"

function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
	// =======================================================
	const startGameEvent = new Event('startGameEvent', {
		bubbles: true,
	})
	const endGameEvent = new Event('endGameEvent', {
		bubbles: true,
	})
	document.dispatchEvent(endGameEvent)
	// =======================================================
	const field = document.querySelector('.minesweeper__game-field')
	field.removeEventListener('click', fieldAction)
	field.innerHTML = ''
	document.querySelector('.minesweeper__clicks-counter').textContent = 0

	const cellsCount = WIDTH * HEIGHT
	for (let i = 0; i < cellsCount; i++) {
		const minesweeperGameBtn = document.createElement('button')
		minesweeperGameBtn.classList.add('minesweeper__ingame-btn')
		if (WIDTH === 10) { minesweeperGameBtn.classList.add('minesweeper__ingame-btn_easy') }
		if (WIDTH === 15) { minesweeperGameBtn.classList.add('minesweeper__ingame-btn_normal') }
		if (WIDTH === 25) { minesweeperGameBtn.classList.add('minesweeper__ingame-btn_hard') }
		field.append(minesweeperGameBtn)
	}

	const cells = [...field.children]
	let closedCount = cellsCount
	const bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, BOMBS_COUNT)
	let isStarted = false

	function fieldAction(e) {
		if (e.target.classList.contains('minesweeper__ingame-btn')) {
			const index = cells.indexOf(e.target)
			const column = index % WIDTH
			const row = Math.floor(index / WIDTH)
			if (isStarted === false) {
				isStarted = true
				window.dispatchEvent(startGameEvent)
			}
			open(row, column)
		}
	}

	function fieldActionCM(e) {
		if (e.target.classList.contains('minesweeper__ingame-btn')) {
			e.preventDefault()
			const index = cells.indexOf(e.target)
			const column = index % WIDTH
			const row = Math.floor(index / WIDTH)
			toogleFlag(row, column)
		}
	}
	field.addEventListener('click', fieldAction)
	field.addEventListener('contextmenu', fieldActionCM)

	function isValid(row, column) {
		return row >= 0 && row < HEIGHT && column >= 0 && column < WIDTH
	}

	function getCount(row, column) {
		let count = 0
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (isBomb(row + y, column + x)) {
					count++
				}
			}
		}
		return count
	}

	function open(row, column) {
		if (!isValid(row, column)) {
			return
		}
		const index = row * WIDTH + column
		const cell = cells[index]

		if (cell.disabled === true || cell.classList.contains('minesweeper__ingame-btn_flaged')) {
			return
		}

		cell.disabled = true

		if (isBomb(row, column)) {
			cell.innerHTML = '<img class="minesweeper__bomb-image" src="assets/img/bomb.jpg" alt="boms">'
			endGame(false)
			return
		}

		closedCount--
		if (closedCount <= BOMBS_COUNT) {
			endGame(true)
			return
		}

		const count = getCount(row, column)

		if (count !== 0) {
			cell.innerHTML = count
			cell.classList.add(`_${count}`)
			return
		}

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				open(row + y, column + x)
			}
		}
	}

	function isBomb(row, column) {
		if (!isValid(row, column)) {
			return false
		}

		const index = row * WIDTH + column
		return bombs.includes(index)
	}

	function toogleFlag(row, column) {
		if (!isValid(row, column)) {
			return
		}
		const index = row * WIDTH + column
		const cell = cells[index]

		if (cell.disabled === true) {
			return
		}

		cell.classList.toggle('minesweeper__ingame-btn_flaged')
	}

	function showBombs(arr) {
		arr.forEach(index => {
			cells[index].innerHTML = '<img class="minesweeper__bomb-image" src="assets/img/bomb.jpg" alt="boms">'
		})
	}

	function endGame(resultOfGame) {
		const time = Number(document.querySelector('.minesweeper__timer-time').textContent)
		showBombs(bombs)
		setTimeout(() => {
			const steps = document.querySelector('.minesweeper__clicks-counter')
			const dataSteps = steps.textContent
			renderEndGameMessage(resultOfGame, time, dataSteps)
		}, 50)
		window.dispatchEvent(endGameEvent)
	}
}

function getDifficultLevel() {
	const minesweeperSelect = document.querySelector('.minesweeper__select')
	if (minesweeperSelect.value === 'Hard') {
		localStorage.setItem('difficultLevel', 'Hard')
		startGame(25, 25, 99)
		return
	}
	if (minesweeperSelect.value === 'Normal') {
		startGame(15, 15, 25)
		localStorage.setItem('difficultLevel', 'Normal')
		return
	}
	startGame(10, 10, 10)
	localStorage.setItem('difficultLevel', 'Easy')
}



export { startGame, getDifficultLevel } 