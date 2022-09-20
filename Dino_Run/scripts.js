document.addEventListener('DOMContentLoaded', () => { 
    const rex = document.querySelector('.rex');
    const grid = document.querySelector('.grid')
    const alert = document.getElementById('alert')
    let isJumping = false
    let gravity = 0.9
let isExtinction = false
 
// code for spacebar control//
function spccontrol(e) {
    if (e.keyCode === 32) {
        if (isJumping === false)
        isJumping = true
       jump()
    }
}

document.addEventListener('keyup', spccontrol)
//code for jump//

let position = 0
function jump() {
    let count = 0
    let timerId = setInterval(function () {

//moves rex down//
if (count === 15){
    clearInterval(timerId)
    console.log('down')
    let downTimerId = setInterval(function () {
    if (count === 0){
        clearInterval(downTimerId)
        isJumping = false
    }
    position -= 5
    count --
    position = position * gravity
    rex.style.bottom = position + 'px'
    },20)
}


//moves rex up//
console.log('up')
position +=30
count ++
position = position * gravity
rex.style.bottom = position + 'px'
    },20)
}

//obstacles for rex//
function generateObstacles() {
   let obstaclePosition = 1000
    const obstacle = document.createElement('div')
    if (!isExtinction) obstacle.classList.add('obstacle')
    grid.appendChild(obstacle)
    obstacle.style.left = obstaclePosition + 'px'
//moves obstacle//
let timerId = setInterval(function(){
    if (obstaclePosition === 0)
        clearInterval(timerId)
        alert.innerHTML = 'Extinction'
        isExtinction = true

        //remove all children elements//
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
        }
    
    
obstaclePosition -=10
obstacle.style.left = obstaclePosition + 'px'
},20)
}

generateObstacles()

})

