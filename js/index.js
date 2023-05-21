import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-Minesweeper-section.js"
import { getDifficultLevel } from "./start-game.js"
renderMainPage()
renderMinesweeperSection()
getDifficultLevel()

const startGameBtm = document.querySelector('.minesweeper__start-game-btn')
startGameBtm.addEventListener('click', () => {
	getDifficultLevel()
})