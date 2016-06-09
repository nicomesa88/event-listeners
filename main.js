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


// var listColor = {
//     backgroundGrey: true
// }

document.querySelector('#add-guest input[type="text"]').addEventListener('keydown', function(enterText){
    var itemsListUl = document.querySelector('.guest-list')
    if (enterText.keyCode === 13){
        console.log('target>>',enterText.target)
        var inputNode = enterText.target
        var usrText = inputNode.value
        var liNode = document.createElement('li')
        liNode.textContent = usrText
        liNode.classList.add('guest')
        itemsListUl.appendChild(liNode)
        inputNode.value = ''

    }
})

document.querySelector('#add-guest-bonus input[type="text"]').addEventListener('keydown', function(enterText){
    var itemsListUl2 = document.querySelector('#add-guest-bonus .guest-list')
    if (enterText.keyCode === 13){
        console.log('target>>',enterText.target)
        var inputNode = enterText.target
        var usrText = inputNode.value
        var liNode = document.createElement('li')
        liNode.textContent = usrText
        liNode.classList.add('guest')
        itemsListUl2.appendChild(liNode)
        inputNode.value = ''

    }
})