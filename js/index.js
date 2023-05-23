import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-minesweeper-section.js"
import { getDifficultLevel } from "./start-game.js"
import { startGameEventFunc, endGameEventFunc } from "./game-state.js"
renderMainPage()
renderMinesweeperSection()
document.querySelector('.minesweeper__select').value = localStorage.getItem('difficultLevel') ? localStorage.getItem('difficultLevel') : 'Easy'

getDifficultLevel()

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('minesweeper__start-game-btn') || e.target.classList.contains('minesweeper__restart-game-btn')) {
		getDifficultLevel()
	}
})

window.addEventListener('startGameEvent', startGameEventFunc)
window.addEventListener('endGameEvent', endGameEventFunc)