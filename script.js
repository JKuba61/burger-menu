const burgerBtn = document.querySelector(`.burger`)
const barsIcon = document.querySelector(`.fa-bars`)
const xIcon = document.querySelector(`.fa-times`)
const nav = document.querySelector(`nav ul`)

const handleNav = () => {
	nav.classList.toggle(`active`)
	xIcon.classList.toggle(`hide`)
	barsIcon.classList.toggle(`hide`)
    
}

burgerBtn.addEventListener(`click`, handleNav)
