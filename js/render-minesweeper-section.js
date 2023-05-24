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
	minesweeperSubitle.textContent = 'Difficulty level:'
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

	const clicksWrapper = document.createElement('div')
	clicksWrapper.classList.add('minesweeper__clicks-wrapper')
	const clickClicksubtitle = document.createElement('h3')
	clickClicksubtitle.classList.add('minesweeper__subtitle')
	clickClicksubtitle.textContent = 'Clicks:'
	const clicksCounter = document.createElement('p')
	clicksCounter.classList.add('minesweeper__clicks-counter')
	clicksCounter.textContent = 0

	clicksWrapper.append(clickClicksubtitle, clicksCounter)
	minesweeperControls.append(clicksWrapper)

	const timerWrapper = document.createElement('div')
	timerWrapper.classList.add('minesweeper__timer-wrapper')
	const timerTitle = document.createElement('h3')
	timerTitle.textContent = 'Timer:'
	timerTitle.classList.add('minesweeper__subtitle')

	const timerTime = document.createElement('p')
	timerTime.classList.add('minesweeper__timer-time')
	timerTime.innerText = '000'

	timerWrapper.append(timerTitle, timerTime)
	minesweeperControls.append(timerWrapper)

	const minesweeperEffects = document.createElement('div')
	minesweeperEffects.classList.add('minesweeper__effects')

	const soundEffects = document.createElement('div')
	soundEffects.classList.add('minesweeper__sound-effects')

	const soundEffectsTitle = document.createElement('h3')
	soundEffectsTitle.textContent = 'Sound effects on/off:'
	soundEffectsTitle.classList.add('minesweeper__subtitle')

	const soundEffectsChecbox = document.createElement('input')
	soundEffectsChecbox.setAttribute('type', 'checkbox')
	soundEffectsChecbox.setAttribute('checked', 'true')
	soundEffectsChecbox.classList.add('minesweeper__sound-chebox')
	soundEffectsChecbox.classList.add('minesweeper__prim-chebox')
	soundEffectsChecbox.classList.add('_active')

	const themeTitle = document.createElement('h3')
	themeTitle.textContent = 'Theme: light/dark'
	themeTitle.classList.add('minesweeper__subtitle')

	const themeChecbox = document.createElement('input')
	themeChecbox.setAttribute('type', 'checkbox')
	themeChecbox.setAttribute('checked', 'true')
	themeChecbox.classList.add('minesweeper__theme-chebox')
	themeChecbox.classList.add('minesweeper__prim-chebox')
	themeChecbox.classList.add('_active')

	soundEffects.append(soundEffectsTitle, soundEffectsChecbox, themeTitle, themeChecbox)
	minesweeperEffects.append(soundEffects)


	const minesweeperStartGameBtn = document.createElement('button')
	minesweeperStartGameBtn.textContent = 'Restart Game'
	minesweeperStartGameBtn.classList.add('minesweeper__start-game-btn')
	minesweeperStartGameBtn.classList.add('minesweeper__prim-btn')

	const minesweeperGameField = document.createElement('div')
	minesweeperGameField.classList.add('minesweeper__game-field')

	const getHistoryBtn = document.createElement('button')
	getHistoryBtn.textContent = `Game History`
	getHistoryBtn.classList.add('minesweeper__get-history-btn')

	minesweeperSection.append(
		minesweeperTitle,
		minesweeperControls,
		minesweeperEffects,
		minesweeperStartGameBtn,
		minesweeperGameField,
		getHistoryBtn)
	mainContainder.append(minesweeperSection)
}
export default renderMinesweeperSection