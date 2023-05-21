function renderMinesweeperSection() {
	const mainContainder = document.querySelector('.main .container')
	const minesweeperSection = document.createElement('section')
	minesweeperSection.classList.add('minesweeper')

	const minesweeperTitle = document.createElement('h1')
	minesweeperTitle.textContent = 'Minesweeper'
	minesweeperTitle.classList.add('minesweeper__title')

	const minesweeperControls = document.createElement('div')
	minesweeperTitle.textContent = 'Minesweeper'
	minesweeperTitle.classList.add('minesweeper__Controls')

	const minesweeperStartGameBtn = document.createElement('button')
	minesweeperStartGameBtn.textContent = 'Start Game'
	minesweeperStartGameBtn.classList.add('minesweeper__start-game-btn')

	const minesweeperGameField = document.createElement('div')
	minesweeperGameField.classList.add('minesweeper__-game-field')



	minesweeperSection.append(
		minesweeperTitle,
		minesweeperControls,
		minesweeperStartGameBtn,
		minesweeperGameField)
	mainContainder.append(minesweeperSection)


}
export default renderMinesweeperSection