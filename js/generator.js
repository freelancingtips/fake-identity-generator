function generateName(gender = "any") {
    let filtered = (gender === "any") ? names : names.filter(n => n.gender === gender);
    const first = randomItem(filtered).name;
    const last = randomItem(surnames);
    return first + " " + last;
}
