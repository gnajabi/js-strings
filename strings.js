function puppetStrings(puppet){
    document.getElementById("paragraph2").innerHTML=puppet.length
}

function sliceString(puppet, start, end){
    let part = puppet.slice(start, end)
    document.getElementById("paragraph3").innerHTML=part
}

function subString(puppet, start, end){
    if(start < 0){
        var sub = puppet.substr(end)
    }
    else{
        var sub = puppet.substr(start, end)
    }

    document.getElementById("paragraph4").innerHTML=sub
}