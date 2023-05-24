import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-minesweeper-section.js"
import { getDifficultLevel } from "./start-game.js"
import { startGameEventFunc, endGameEventFunc } from "./game-state.js"
import { showGameHistory, hideGameHistory } from "./game-history.js"
renderMainPage()
renderMinesweeperSection()
document.querySelector('.minesweeper__select').value = localStorage.getItem('difficultLevel') ? localStorage.getItem('difficultLevel') : 'Easy'

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

// console.log(`Привет! Здорово если ты зашел почитать это,
// я реализовал всё кроме звука, смены цветовой схемы, сохранение состояния игры, и генерации мин после первого хода
// Но сложность игры сохраняется при перезагрузке.
// Вроде ничего не забыл.
// Да согласен, выглядит он конечно как ублюдочек, но я старался.
// Я не спал уже больше суток, так что не судите строго.
// В планах конечно же еще есть навести порядок, но не сегодня, потому что через 17 минут
// мне вырубят свет, и я наконец пойду спать. 7.47 мск

// upd:
// скор борд добавил`)