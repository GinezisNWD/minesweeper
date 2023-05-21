import renderMainPage from "./render-main-page.js"
import renderMinesweeperSection from "./render-Minesweeper-section.js"
import startGame from "./start-game.js"
renderMainPage()
renderMinesweeperSection()
startGame(10, 10, 10)


const startGameBtm = document.querySelector('.minesweeper__start-game-btn')
startGameBtm.addEventListener('click', () => {
	startGame(10, 10, 10)
})