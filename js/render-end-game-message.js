import { saveResults } from "./game-history.js"
function renderEndGameMessage(res, time, steps) {
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
	minesweeperStartGameBtn.classList.add('minesweeper__prim-btn')

	if (!res) {
		popUpMessage.innerText = `Жаль, но вы проиграли за ${steps} шагов и ${time} секунд.\nСыграем еще раз?`

		if (document.querySelector('.minesweeper__sound-chebox').classList.contains('_active')) {
			const loseSound = new Audio('.../assets/audio/lose.mp3')
			loseSound.play()
		}
	} else {
		popUpMessage.innerText = `Поздравляем, вы нашли все мины за ${steps} шагов и ${time} секунд.\nСыграем еще раз?`
		if (document.querySelector('.minesweeper__sound-chebox').classList.contains('_active')) {
			const winSound = new Audio('../assets/audio/win.mp3')
			winSound.play()
		}
	}

	popUp.append(popUpMessage, minesweeperStartGameBtn)
	popUpWrapper.append(popUp)
	field.append(popUpWrapper)
	saveResults(res, time, steps)
}

export default renderEndGameMessage