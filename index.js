const workButton = document.querySelector('.work-button')
workButton.addEventListener('click', function(e) {
	e.preventDefault()
    document.querySelector('.cards').style.opacity = '1'
    console.log('clicked')
})

const homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', function(e) {
	e.preventDefault()
    document.querySelector('.cards').style.opacity = '0'
    console.log('clicked')
})