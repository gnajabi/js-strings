function puppetStrings(puppet){
    document.getElementById("paragraph2").innerHTML=puppet.length
}

function sliceString(puppet, start, end){
    let part = puppet.slice(start, end)
    document.getElementById("paragraph3").innerHTML=part
}