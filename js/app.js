document.getElementById("generate").addEventListener("click",()=>{
    const identity = generateIdentity();
    displayIdentity(identity);
});
