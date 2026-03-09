// Identity generator using data and utils

(function(global) {
  const utils = global.fakeUtils;

  // Additional internal data (cities, states)
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego",
    "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco",
    "Indianapolis", "Seattle", "Denver", "Washington", "Boston", "El Paso", "Nashville", "Detroit", "Portland"
  ];

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
    "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
    "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const genders = ["Male", "Female", "Non-binary"];

  function generateIdentity() {
    // Pick random data
    const firstName = utils.randomArrayItem(firstNames);
    const lastName = utils.randomArrayItem(lastNames);
    const gender = utils.randomArrayItem(genders);
    const dob = utils.randomDate(1960, 2002);
    const dobString = utils.formatDate(dob);

    // Address
    const streetNumber = utils.randomInt(1, 9999);
    const streetName = utils.randomArrayItem(streetNames);
    const city = utils.randomArrayItem(cities);
    const state = utils.randomArrayItem(states);
    const zip = utils.randomZip();
    const address = `${streetNumber} ${streetName}, ${city}, ${state} ${zip}`;

    // Phone & Email
    const phone = utils.randomPhone();
    const emailDomain = utils.randomArrayItem(emailDomains);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`;

    // Random ID
    const idNumber = utils.randomID(12);

    // Create Identity object
    const identityData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dob: dobString,
      address: address,
      phone: phone,
      email: email,
      idNumber: idNumber
    };

    return new Identity(identityData);
  }

  global.generateIdentity = generateIdentity;
})(window);
