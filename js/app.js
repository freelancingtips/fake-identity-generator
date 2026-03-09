// ---------------- Back & Exit Buttons ----------------
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html"; // home page
});

document.getElementById("exitBtn").addEventListener("click", () => {
    if(confirm("Are you sure you want to exit?")){
        window.close();
        window.location.href = "https://www.google.com"; // fallback
    }
});

// ---------------- Copy Identity ----------------
document.getElementById("copyBtn").addEventListener("click", () => {
    const card = document.getElementById("identityCard");
    let text = "";
    card.querySelectorAll("h2, p").forEach(el => text += el.innerText + "\n");
    navigator.clipboard.writeText(text).then(() => alert("Identity copied!"));
});

// ---------------- Random Item Utility ----------------
function randomItem(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// ---------------- Identity Generator ----------------
function generateIdentity(){
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;

    let firstName = gender==="female"?randomItem(femaleNames):
                    gender==="male"?randomItem(maleNames):
                    randomItem(maleNames.concat(femaleNames));
    let lastName = randomItem(surnames);
    let street = randomItem(streets);
    let domain = randomItem(domains);

    const fullName = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    const address = `${Math.floor(Math.random()*9999)+1} ${street}`;
    const phone = `+1${Math.floor(Math.random()*9000000000)+1000000000}`;
    const username = `${firstName.toLowerCase()}${Math.floor(Math.random()*1000)}`;
    const password = Math.random().toString(36).slice(-8);
    const creditCard = `${Math.floor(Math.random()*9000)+1000}-${Math.floor(Math.random()*9000)+1000}-${Math.floor(Math.random()*9000)+1000}-${Math.floor(Math.random()*9000)+1000}`;

    document.getElementById("name").innerText = fullName;
    document.getElementById("countryText").innerText = country==="any"?"Unknown Country":country;
    document.getElementById("address").innerText = address;
    document.getElementById("email").innerText = email;
    document.getElementById("phone").innerText = phone;
    document.getElementById("username").innerText = username;
    document.getElementById("password").innerText = password;
    document.getElementById("creditCard").innerText = creditCard;
}

document.getElementById("generate").addEventListener("click", generateIdentity);
