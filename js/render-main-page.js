
function renderMainPage() {
	const wrapper = document.createElement('div')
	wrapper.classList.add('wrapper')

	const header = document.createElement('header')
	header.classList.add('header')
	const container = document.createElement('div')
	container.classList.add('container')
	header.append(container)

	const main = document.createElement('main')
	main.classList.add('main')
	main.append(container.cloneNode())

	const footer = document.createElement('footer')
	footer.classList.add('footer')
	footer.append(container.cloneNode())


	wrapper.append(header, main, footer,)
	document.body.prepend(wrapper)

}

export default renderMainPage