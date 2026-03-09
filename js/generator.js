function generateName(gender){
    const first = (gender==="female") ? randomItem(femaleNames) : randomItem(maleNames);
    const last = randomItem(surnames);
    return first + " " + last;
}

function generateAddress(){
    return randomNumber(10,9999) + " " + randomItem(streets);
}

function generateEmail(name){
    return name.toLowerCase().replace(" ",".") + "@" + randomItem(domains);
}

function generatePhone(){
    return "+1 "+randomNumber(200,999)+"-"+randomNumber(100,999)+"-"+randomNumber(1000,9999);
}
