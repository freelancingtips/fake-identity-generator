function generateIdentity(){
    const gender = document.getElementById("gender").value;
    const countrySelect = document.getElementById("country").value;

    const name = generateName(gender);
    const country = (countrySelect==="any") ? randomItem(["USA","UK","Canada","Germany"]) : countrySelect;
    const address = generateAddress();
    const email = generateEmail(name);
    const phone = generatePhone();
    const username = generateUsername(name);
    const password = generatePassword();
    const creditCard = generateCreditCard();

    return {name, country, address, email, phone, username, password, creditCard};
}

function displayIdentity(identity){
    document.getElementById("name").innerText = identity.name;
    document.getElementById("country").innerText = identity.country;
    document.getElementById("address").innerText = identity.address;
    document.getElementById("email").innerText = identity.email;
    document.getElementById("phone").innerText = identity.phone;
    document.getElementById("username").innerText = identity.username;
    document.getElementById("password").innerText = identity.password;
    document.getElementById("creditCard").innerText = identity.creditCard;
}

function copyIdentity(){
    const text = [
        document.getElementById("name").innerText,
        document.getElementById("country").innerText,
        document.getElementById("address").innerText,
        document.getElementById("email").innerText,
        document.getElementById("phone").innerText,
        document.getElementById("username").innerText,
        document.getElementById("password").innerText,
        document.getElementById("creditCard").innerText
    ].join("\n");

    navigator.clipboard.writeText(text);
    alert("Identity copied!");
}
