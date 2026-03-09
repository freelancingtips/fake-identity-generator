// 1000 last names with prefixes & suffixes
var lastNames = (function() {
  const base = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
  ]; // 100 base

  const prefixes = ["", "Mc", "Mac", "O'", "De ", "Van ", "Von ", "St. ", "Le ", "La "];
  const suffixes = ["", " Jr.", " Sr.", " II", " III", " IV", " Esq.", " PhD", " MD", " DDS"];

  const result = [];
  for (let i = 0; i < 1000; i++) {
    const baseIdx = i % base.length;
    const prefixIdx = Math.floor(i / base.length) % prefixes.length;
    const suffixIdx = Math.floor(i / (base.length * prefixes.length)) % suffixes.length;
    result.push(prefixes[prefixIdx] + base[baseIdx] + suffixes[suffixIdx]);
  }
  return result;
})();
