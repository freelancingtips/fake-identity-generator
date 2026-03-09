// 1000 first names with variations
var firstNames = (function() {
  const base = [
    "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
    "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen",
    "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Donald", "Sandra",
    "Mark", "Ashley", "Paul", "Kimberly", "Steven", "Emily", "Andrew", "Donna", "Kenneth", "Michelle",
    "George", "Dorothy", "Joshua", "Carol", "Kevin", "Amanda", "Brian", "Melissa", "Edward", "Deborah",
    "Ronald", "Stephanie", "Timothy", "Rebecca", "Jason", "Sharon", "Jeffrey", "Laura", "Ryan", "Cynthia",
    "Jacob", "Kathleen", "Gary", "Amy", "Nicholas", "Shirley", "Eric", "Angela", "Jonathan", "Helen",
    "Stephen", "Anna", "Larry", "Brenda", "Justin", "Pamela", "Scott", "Nicole", "Brandon", "Samantha",
    "Benjamin", "Katherine", "Samuel", "Emma", "Gregory", "Ruth", "Alexander", "Christine", "Patrick", "Catherine",
    "Frank", "Debra", "Raymond", "Rachel", "Jack", "Carolyn", "Henry", "Janet", "Peter", "Maria"
  ]; // 100 base names

  const variants = [
    "", " Marie", " Ann", " Lee", " Ray", " Lynn", " Jo", " Mae", " Rose", " James",
    " Michael", " David", " John", " Robert", " William", " Charles", " Joseph", " Thomas", " Christopher", " Daniel"
  ]; // 20 variants

  const result = [];
  for (let i = 0; i < 1000; i++) {
    const baseIdx = i % base.length;
    const variantIdx = Math.floor(i / base.length) % variants.length;
    result.push(base[baseIdx] + variants[variantIdx]);
  }
  return result;
})();
