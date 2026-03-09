// Back Button: redirect to home page if history.back() won't work
document.getElementById("backBtn").addEventListener("click", () => {
    // Replace 'index.html' with your actual home page URL
    window.location.href = "index.html"; 
});

// Exit Button: fallback to a safe page if window.close() fails
document.getElementById("exitBtn").addEventListener("click", () => {
    if(confirm("Are you sure you want to exit?")){
        window.close(); // may not work on mobile
        window.location.href = "https://www.google.com"; // fallback redirect
    }
});
