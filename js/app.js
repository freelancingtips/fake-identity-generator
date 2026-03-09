// Main app: UI bindings and rendering

(function(global) {
  const utils = global.fakeUtils;

  // DOM elements
  const detailsContainer = document.getElementById('identityDetails');
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');

  // Current identity
  let currentIdentity = null;

  // Render identity to UI
  function renderIdentity(identity) {
    const obj = identity.toObject();
    const html = `
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-user"></i> Full Name</div>
        <div class="detail-value">${obj.fullName}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-venus-mars"></i> Gender</div>
        <div class="detail-value">${obj.gender}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-calendar-alt"></i> Date of Birth</div>
        <div class="detail-value">${obj.dob}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-map-marker-alt"></i> Address</div>
        <div class="detail-value">${obj.address}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-phone-alt"></i> Phone</div>
        <div class="detail-value">${obj.phone}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-envelope"></i> Email</div>
        <div class="detail-value">${obj.email}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label"><i class="fas fa-id-card"></i> ID Number</div>
        <div class="detail-value">${obj.idNumber}</div>
      </div>
    `;
    detailsContainer.innerHTML = html;
  }

  // Generate new identity and update UI
  function generateNew() {
    currentIdentity = generateIdentity();
    renderIdentity(currentIdentity);
  }

  // Copy all details as formatted text
  function copyToClipboard() {
    if (!currentIdentity) {
      alert('Generate an identity first!');
      return;
    }

    const obj = currentIdentity.toObject();
    const text = `
FULL NAME: ${obj.fullName}
GENDER: ${obj.gender}
DATE OF BIRTH: ${obj.dob}
ADDRESS: ${obj.address}
PHONE: ${obj.phone}
EMAIL: ${obj.email}
ID NUMBER: ${obj.idNumber}
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      // Visual feedback
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy All';
      }, 2000);
    }).catch(() => {
      alert('Failed to copy. Manual copy below:\n\n' + text);
    });
  }

  // Event listeners
  generateBtn.addEventListener('click', generateNew);
  copyBtn.addEventListener('click', copyToClipboard);

  // Initial generation on page load
  window.addEventListener('DOMContentLoaded', generateNew);
})(window);
