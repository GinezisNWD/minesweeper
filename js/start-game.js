function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
	const field = document.querySelector('.minesweeper__game-field')
	field.innerHTML = ''
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

	field.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') { return }
		const index = cells.indexOf(e.target)
		const column = index % WIDTH
		const row = Math.floor(index / WIDTH)
		open(row, column)
	})

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

		if (cell.disabled === true) {
			return
		}

		cell.disabled = true

		if (isBomb(row, column)) {
			cell.innerHTML = 'x'
			console.log('you lose')
			return
		}

		closedCount--
		if (closedCount <= BOMBS_COUNT) {
			console.log('you won')
			return
		}

		const count = getCount(row, column)

		if (count !== 0) {
			cell.innerHTML = count
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
}

function getDifficultLevel() {
	const minesweeperSelect = document.querySelector('.minesweeper__select')
	if (minesweeperSelect.value === 'Hard') {
		startGame(25, 25, 99)
		return
	}
	if (minesweeperSelect.value === 'Normal') {
		startGame(15, 15, 25)
		return
	}
	startGame(10, 10, 10)
}

export { startGame, getDifficultLevel } 