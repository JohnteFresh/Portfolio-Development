const form = document.querySelector('#send-message')

function messsage(input, message, type){
  const msg = input.parentNode.querySelector('small:last-of-type');
  const emailSuggest = `Replace it with ${form.elements.user-email.value.toLowerCase()}?`;
  msg.innerText = message + emailSuggest;
  input.classname = type ? 'success' : 'error';
  return type
}

function showError(input, message){
  return showMessage(input, message, false);
}

function emailValidate(input, invalidMsg){
  const emailRegex = /[A-Z]/;
  const email = input.value.trim();
  if(emailRegex.test(email)){
    return showError(input, invalidMsg);
  }
  return true;
}
const email_lowercase = 'Please enter you email in lowercase.';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const validEmail = emailValidate(form.elements.user_email, email_lowercase);
    if(validEmail){
      form.submit();
    }
});