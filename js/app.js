/* ---------------- Back & Exit Buttons ---------------- */
document.getElementById("backBtn").addEventListener("click", () => {
    // Redirect to home page
    window.location.href = "index.html"; // change to your homepage if needed
});

document.getElementById("exitBtn").addEventListener("click", () => {
    if(confirm("Are you sure you want to exit?")){
        window.close(); // may not work on mobile
        window.location.href = "https://www.google.com"; // fallback redirect
    }
});

/* ---------------- Copy Identity Function ---------------- */
document.getElementById("copyBtn").addEventListener("click", () => {
    const card = document.getElementById("identityCard");
    let textToCopy = "";
    card.querySelectorAll("h2, p").forEach(el => {
        textToCopy += el.innerText + "\n";
    });

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Identity copied to clipboard!");
    });
});

/* ---------------- Random Item Utility ---------------- */
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ---------------- Identity Generator ---------------- */
function generateIdentity() {
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;

    // Select first name based on gender
    let firstName = gender === "female" ? randomItem(femaleNames) :
                    gender === "male" ? randomItem(maleNames) :
                    randomItem(maleNames.concat(femaleNames));

    let lastName = randomItem(surnames);
    let street = randomItem(streets);
    let domain = randomItem(domains);

    // Generate fields
    const fullName = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    const address = `${Math.floor(Math.random() * 9999) + 1} ${street}`;
    const phone = `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`;
    const username = `${firstName.toLowerCase()}${Math.floor(Math.random() * 1000)}`;
    const password = Math.random().toString(36).slice(-8);
    const creditCard = `${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`;

    // Update DOM
    document.getElementById("name").innerText = fullName;
    document.getElementById("countryText").innerText = country === "any" ? "Unknown Country" : country;
    document.getElementById("address").innerText = address;
    document.getElementById("email").innerText = email;
    document.getElementById("phone").innerText = phone;
    document.getElementById("username").innerText = username;
    document.getElementById("password").innerText = password;
    document.getElementById("creditCard").innerText = creditCard;
}

/* ---------------- Event Listener for Generate Button ---------------- */
document.getElementById("generate").addEventListener("click", generateIdentity);
