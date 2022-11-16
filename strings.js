function puppetStrings(puppet){
    document.getElementById("paragraph2").innerHTML=puppet.length
}

function sliceString(puppet, start, end){
    let part = puppet.slice(start, end)
    document.getElementById("paragraph3").innerHTML=part
}

function subString(puppet, start, end){
    let sub = puppet.substring(start, end)
    document.getElementById("paragraph4").innerHTML=sub
}