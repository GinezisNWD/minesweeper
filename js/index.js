import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-minesweeper-section.js"
import { getDifficultLevel } from "./start-game.js"
import { startGameEventFunc, endGameEventFunc } from "./game-state.js"
import { showGameHistory, hideGameHistory } from "./game-history.js"
renderMainPage()
renderMinesweeperSection()
document.querySelector('.minesweeper__select').value = localStorage.getItem('difficultLevel') ? localStorage.getItem('difficultLevel') : 'Easy'
document.querySelector('.minesweeper__number-of-mine-input').value = localStorage.getItem('numberOfMines') ? localStorage.getItem('numberOfMines') : 10

getDifficultLevel()

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('minesweeper__start-game-btn') || e.target.classList.contains('minesweeper__restart-game-btn')) {
		getDifficultLevel()
	}

	if (e.target.classList.contains('minesweeper__get-history-btn')) {
		showGameHistory()
	}

	if (e.target.classList.contains('history-popup__close-btn')) {
		hideGameHistory()
	}
})

window.addEventListener('startGameEvent', startGameEventFunc)
window.addEventListener('endGameEvent', endGameEventFunc)

document.querySelector('.minesweeper__sound-chebox').addEventListener('click', (e) => {
	e.target.classList.toggle('_active')
})
document.querySelector('.minesweeper__theme-chebox').addEventListener('click', (e) => {
	e.target.classList.toggle('_active')
	document.body.classList.toggle('dark')
})

console.log(`Привет! Здорово если ты зашел почитать это,
я реализовал всё кроме: 
сохранение состояния игры при перезагрузке страницы 
генерация мин после первого хода
Но сложность игры сохраняется при перезагрузке.
Вроде ничего не забыл.
Да согласен, выглядит он конечно как ублюдочек, но я старался.
Не судите строго что не стилизовал чекбоксы, у меня с этим детская травма`)