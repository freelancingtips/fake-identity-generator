// Existing app.js logic for your generator stays above
// Example: generate identity, copy identity functions, etc.

/* ---------------- Back & Exit Buttons ---------------- */

// Back Button: redirect to home page if history.back() won't work
document.getElementById("backBtn").addEventListener("click", () => {
    // Replace 'index.html' with your actual home page URL
    window.location.href = "index.html";
});

// Exit Button: fallback to a safe page if window.close() fails
document.getElementById("exitBtn").addEventListener("click", () => {
    if(confirm("Are you sure you want to exit?")){
        // Attempt to close window (works if opened via JS)
        window.close();
        // Fallback redirect (always works)
        window.location.href = "https://www.google.com";
    }
});

/* ---------------- Optional: Copy Identity Function ---------------- */
function copyIdentity() {
    const card = document.getElementById("identityCard");
    let textToCopy = "";
    card.querySelectorAll("h2, p").forEach(el => {
        textToCopy += el.innerText + "\n";
    });

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Identity copied to clipboard!");
    });
}

/* ---------------- Generator Logic ---------------- */
// Your existing generator.js / identity.js code is already included
// Keep it here or import via modules as before
