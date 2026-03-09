// Identity class / factory

(function(global) {
  function Identity(data) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.gender = data.gender || '';
    this.dob = data.dob || null;
    this.address = data.address || '';
    this.phone = data.phone || '';
    this.email = data.email || '';
    this.idNumber = data.idNumber || '';
  }

  Identity.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  Identity.prototype.toObject = function() {
    return {
      fullName: this.getFullName(),
      gender: this.gender,
      dob: this.dob,
      address: this.address,
      phone: this.phone,
      email: this.email,
      idNumber: this.idNumber
    };
  };

  global.Identity = Identity;
})(window);
