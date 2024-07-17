function loadBamforth(){
document.getElementById('bamforth').src = 'bamforth.png'
}

function moveBamforth(){
alert('Bamforth has been found! You win!')
var picture = document.getElementById('bamforth')
var x = Math.random() * 1000
var y = Math.random() * 1000
picture.style.top = x + 'px'
picture.style.left = y + 'px'
}
