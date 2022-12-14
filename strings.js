function puppetStrings(puppet) {
    document.getElementById("paragraph2").innerHTML = puppet.length
}

function sliceString(puppet, start, end) {
    let part = puppet.slice(start, end)
    document.getElementById("paragraph3").innerHTML = part
}

function subString(puppet, start, end) {
    if (start < 0) {
        var sub = puppet.substr(end)
    }
    else {
        var sub = puppet.substr(start, end)
    }

    document.getElementById("paragraph4").innerHTML = sub
}

function replaceString(oldStr, newStr) {
    let text = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph5").innerHTML = text.replace(oldStr, newStr)
}

function lowerCase() {
    let text = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph6").innerHTML = text.toLowerCase()
}

function upperCase() {
    let text = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph7").innerHTML = text.toUpperCase()
}

function letsSplit() {
    let text = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph8").innerHTML = text.split("")
}

function chercher(puppet) {
    let str = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph9").innerHTML = str.indexOf(puppet)
}

function dernier(puppet) {
    let str = document.getElementById("paragraph1").innerHTML
    document.getElementById("paragraph10").innerHTML = str.lastIndexOf(puppet)
}

function strikeAMatch(puppet) {
    let str = document.getElementById("paragraph1").innerHTML
    const arr = str.match(puppet)
    document.getElementById("paragraph11").innerHTML = arr + '</br>' + arr.length
}

function iterateMatch(puppet) {
    let str = document.getElementById("paragraph1").innerHTML
    const iterator = str.matchAll(puppet)
    document.getElementById("paragraph12").innerHTML = Array.from(iterator)

}

function verifyEmail() {
    try {
        //retrieve email address
        let address = document.getElementById('email').value
        if (address.includes('@') && address.endsWith('gmail.com')) {
            document.getElementsByClassName('form')[0].style.background = '#0fd651;'
            document.getElementsByClassName('verify')[0].innerHTML = 'Verified'
        }
        else {
            document.getElementsByClassName('verify')[0].style.background = '#ff9900'
            document.getElementsByClassName('verify')[0].innerHTML = 'Try Again'
        }
    }
    catch (e) {
        console.log(e)
    }

}