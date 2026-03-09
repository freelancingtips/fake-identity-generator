// Utility functions

window.fakeUtils = {
  // Return random item from array
  randomArrayItem: (arr) => arr[Math.floor(Math.random() * arr.length)],

  // Random integer between min and max (inclusive)
  randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

  // Random date between two years
  randomDate: (startYear = 1960, endYear = 2002) => {
    const year = fakeUtils.randomInt(startYear, endYear);
    const month = fakeUtils.randomInt(0, 11);
    const day = fakeUtils.randomInt(1, 28); // simplify
    return new Date(year, month, day);
  },

  // Format date as DD/MM/YYYY
  formatDate: (date) => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  },

  // Generate random phone number (US format)
  randomPhone: () => {
    const area = fakeUtils.randomInt(200, 999);
    const exch = fakeUtils.randomInt(200, 999);
    const sub = fakeUtils.randomInt(1000, 9999);
    return `(${area}) ${exch}-${sub}`;
  },

  // Generate random zip code
  randomZip: () => fakeUtils.randomInt(10000, 99999).toString(),

  // Generate random alphanumeric ID
  randomID: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};
