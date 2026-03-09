function generateName(gender = "any") {
    let filtered = (gender === "any") ? names : names.filter(n => n.gender === gender);
    const first = randomItem(filtered).name;
    const last = randomItem(surnames);
    return first + " " + last;
}

function generateAddress() {
    return randomNumber(10,9999) + " " + randomItem(streets);
}

function generateEmail(name) {
    return name.toLowerCase().replace(" ", ".") + "@" + randomItem(domains);
}

function generatePhone() {
    return "+1 "+randomNumber(200,999)+"-"+randomNumber(100,999)+"-"+randomNumber(1000,9999);
}
