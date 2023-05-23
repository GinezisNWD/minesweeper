function saveResults(result, time, clicks) {
	if (localStorage.getItem('savedGames') === null) {
		const results = new Array(10)
		localStorage.setItem('savedGames', JSON.stringify(results))
	}

	const results = JSON.parse(localStorage.getItem('savedGames'))
	const thing = { result, time, clicks }
	results.unshift(thing)
	results.length = 10
	localStorage.setItem('savedGames', JSON.stringify(results))
}

function showGameHistory() {
	const minesweeperSection = document.querySelector('.minesweeper')
	const results = JSON.parse(localStorage.getItem('savedGames'))

	const historyPopUpWrapper = document.createElement('div')
	historyPopUpWrapper.classList.add('history-popup__wrapper')

	const historyPopUp = document.createElement('div')
	historyPopUp.classList.add('minesweeper__history-popup')
	historyPopUp.classList.add('history-popup')

	const historyPopUpTitle = document.createElement('h2')
	historyPopUpTitle.classList.add('history-popup__title')
	historyPopUpTitle.textContent = 'Game History'

	const historyPopUpBody = document.createElement('div')
	historyPopUpBody.classList.add('history-popup__body')

	const closeHistoryPopUpBtn = document.createElement('button')
	closeHistoryPopUpBtn.classList.add('history-popup__close-btn')
	closeHistoryPopUpBtn.textContent = 'X'



	if (localStorage.getItem('savedGames') === null) {
		const historyPopUpSubTitle = document.createElement('h2')
		historyPopUpSubTitle.classList.add('history-popup__title')
		historyPopUpSubTitle.textContent = 'Game history is empty for now'

		historyPopUpBody.append(historyPopUpSubTitle)
	} else {
		const historyPopUpRow = document.createElement('div')
		historyPopUpRow.classList.add('history-popup__row')

		const historyPopUpNum = document.createElement('p')
		historyPopUpNum.classList.add('history-popup__num')
		historyPopUpNum.textContent = '№'

		const historyPopUpRes = document.createElement('p')
		historyPopUpRes.classList.add('history-popup__res')
		historyPopUpRes.textContent = 'Result'

		const historyPopUpTime = document.createElement('p')
		historyPopUpTime.classList.add('history-popup__time')
		historyPopUpTime.textContent = 'Time'

		const historyPopUpClicks = document.createElement('p')
		historyPopUpClicks.classList.add('history-popup__clicks')
		historyPopUpClicks.textContent = 'Clicks'

		historyPopUpRow.append(
			historyPopUpNum,
			historyPopUpRes,
			historyPopUpTime,
			historyPopUpClicks
		)
		historyPopUpBody.append(historyPopUpRow)
		for (let i = 0; i < results.length; i++) {
			if (results[i] !== null) {
				const historyPopUpRow = document.createElement('div')
				historyPopUpRow.classList.add('history-popup__row')

				const historyPopUpNum = document.createElement('p')
				historyPopUpNum.classList.add('history-popup__num')
				historyPopUpNum.textContent = i + 1

				const historyPopUpRes = document.createElement('p')
				historyPopUpRes.classList.add('history-popup__res')
				historyPopUpRes.textContent = results[i].result ? 'Win' : 'Lose'

				const historyPopUpTime = document.createElement('p')
				historyPopUpTime.classList.add('history-popup__time')
				historyPopUpTime.textContent = results[i].time === 1 ? `${results[i].time} second` : `${results[i].time} seconds`

				const historyPopUpClicks = document.createElement('p')
				historyPopUpClicks.classList.add('history-popup__clicks')
				historyPopUpClicks.textContent = results[i].clicks

				historyPopUpRow.append(
					historyPopUpNum,
					historyPopUpRes,
					historyPopUpTime,
					historyPopUpClicks
				)
				historyPopUpBody.append(historyPopUpRow)
			} else { continue }
		}
	}

	historyPopUpBody.append(closeHistoryPopUpBtn)
	historyPopUp.append(historyPopUpTitle, historyPopUpBody)
	historyPopUpWrapper.append(historyPopUp)
	minesweeperSection.append(historyPopUpWrapper)
}

function hideGameHistory() {
	const historyPopUpWrapper = document.querySelector('.history-popup__wrapper')
	historyPopUpWrapper.remove()
}

export { saveResults, showGameHistory, hideGameHistory } 