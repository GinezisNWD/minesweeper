function renderEndGameMessage(res) {
	const field = document.querySelector('.minesweeper__game-field')

	const popUpWrapper = document.createElement('div')
	popUpWrapper.classList.add('minesweeper__pop-up-wrapper')

	const popUp = document.createElement('div')
	popUp.classList.add('minesweeper__pop-up')

	const popUpMessage = document.createElement('h2')
	popUpMessage.classList.add('minesweeper__message')

	const minesweeperStartGameBtn = document.createElement('button')
	minesweeperStartGameBtn.textContent = 'Restart Game'
	minesweeperStartGameBtn.classList.add('minesweeper__restart-game-btn')

	if (!res) {
		popUpMessage.innerText = 'Жаль, но вы проиграли. Сыграем еще раз?'
	} else {
		popUpMessage.innerText = 'Поздравляем, вы нашли все мины. Сыграем еще раз?'
	}


	popUp.append(popUpMessage, minesweeperStartGameBtn)

	popUpWrapper.append(popUp)
	field.append(popUpWrapper)
}

export default renderEndGameMessage