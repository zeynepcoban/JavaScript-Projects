var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailrror = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
 var name = document.getElementById('contact-name').value;

 if (name.length == 0) {
  nameError.innerHTML = 'Name is required';
  return false;
 }
 if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
  nameError.innerHTML = 'Write full name';
  return false;
 }
 nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
 return true;
}

