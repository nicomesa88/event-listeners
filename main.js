// GO!
var divState = {
        showing: true
    }

document.querySelector("#hide-nav button").addEventListener('click',function(){
    var navNode = document.querySelector('.nav-menu')
    if (divState.showing) {
        navNode.style.opacity = 0
        divState.showing = false
        document.querySelector('button').textContent = "show Now"
    }
    else {
        navNode.style.opacity = 1
        divState.showing = true
        document.querySelector('button').textContent = "hide now"

    } console.log(divState)
})
