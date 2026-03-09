function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUsername(name) {
    return name.toLowerCase().replace(" ", ".") + randomNumber(10, 99);
}

function generatePassword(length=8) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i=0;i<length;i++){
        pass += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return pass;
}

function generateCreditCard(){
    return randomNumber(4000,4999)+"-"+randomNumber(1000,9999)+"-"+randomNumber(1000,9999)+"-"+randomNumber(1000,9999);
}
