const form = document.getElementById('send-message');
const emailInput = document.getElementById('user-email');
const errorMsg = document.getElementById('error-text');

form.addEventListener('submit', (event) => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    return true;
  }
  errorMsg.style.display = 'block';
  event.preventDefault();
  return false;
});

document.getElementById('error-text').style.color = 'Red';
document.getElementById('error-text').style.fontSize = '80%%';