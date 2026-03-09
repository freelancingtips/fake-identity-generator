// 1000 street names with directions & types
var streetNames = (function() {
  const bases = [
    "Main", "Oak", "Maple", "Washington", "Park", "Elm", "Cedar", "Lake", "Hill", "Pine",
    "View", "Broadway", "Highland", "Sunset", "Church", "Market", "River", "Forest", "North", "South",
    "East", "West", "Mill", "School", "Center", "Union", "Spring", "Jefferson", "Madison", "Adams",
    "Jackson", "Lincoln", "Washington", "Monroe", "Franklin", "Clinton", "Hamilton", "Madison", "Tyler", "Polk",
    "Taylor", "Fillmore", "Pierce", "Buchanan", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland"
  ]; // 50

  const types = [
    "St", "Ave", "Rd", "Blvd", "Ln", "Dr", "Way", "Ct", "Pl", "Terrace",
    "Circle", "Hwy", "Street", " Avenue", " Road", " Lane", " Drive", " Court", " Place", " Trace"
  ];

  const prefixes = ["", "Old ", "New ", "North ", "South ", "East ", "West ", "Upper ", "Lower ", "Little "];

  const result = [];
  for (let i = 0; i < 1000; i++) {
    const baseIdx = i % bases.length;
    const typeIdx = Math.floor(i / bases.length) % types.length;
    const prefixIdx = Math.floor(i / (bases.length * types.length)) % prefixes.length;
    result.push(prefixes[prefixIdx] + bases[baseIdx] + " " + types[typeIdx]);
  }
  return result;
})();
