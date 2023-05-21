import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-Minesweeper-section.js"
import { getDifficultLevel } from "./start-game.js"
renderMainPage()
renderMinesweeperSection()
getDifficultLevel()

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('minesweeper__start-game-btn') || e.target.classList.contains('minesweeper__restart-game-btn')) {
		getDifficultLevel()
	}
})