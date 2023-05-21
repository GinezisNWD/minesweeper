function renderMinesweeperSection() {
	const mainContainder = document.querySelector('.main .container')
	const minesweeperSection = document.createElement('section')
	minesweeperSection.classList.add('minesweeper')

	const minesweeperTitle = document.createElement('h1')
	minesweeperTitle.textContent = 'Minesweeper'
	minesweeperTitle.classList.add('minesweeper__title')

	const minesweeperControls = document.createElement('div')
	minesweeperControls.classList.add('minesweeper__controls')

	const difficultyLevel = document.createElement('div')
	difficultyLevel.classList.add('minesweeper__difficulty-level')

	const minesweeperSubitle = document.createElement('h3')
	minesweeperSubitle.textContent = 'Difficulty level'
	minesweeperSubitle.classList.add('minesweeper__subtitle')

	const minesweeperSelect = document.createElement('select')
	minesweeperSelect.classList.add('minesweeper__select')
	const easyLevel = document.createElement('option')
	easyLevel.textContent = 'Easy'
	const normalLevel = document.createElement('option')
	normalLevel.textContent = 'Normal'
	const hardLevel = document.createElement('option')
	hardLevel.textContent = 'Hard'

	minesweeperSelect.append(easyLevel, normalLevel, hardLevel)
	difficultyLevel.append(minesweeperSubitle, minesweeperSelect)
	minesweeperControls.append(difficultyLevel)

	const minesweeperStartGameBtn = document.createElement('button')
	minesweeperStartGameBtn.textContent = 'Start Game'
	minesweeperStartGameBtn.classList.add('minesweeper__start-game-btn')

	const minesweeperGameField = document.createElement('div')
	minesweeperGameField.classList.add('minesweeper__game-field')

	minesweeperSection.append(
		minesweeperTitle,
		minesweeperControls,
		minesweeperStartGameBtn,
		minesweeperGameField)
	mainContainder.append(minesweeperSection)
}
export default renderMinesweeperSection