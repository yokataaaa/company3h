// import * as functionEmail from "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";

// functionEmail.emailjs.init("user_dzaLDc1Vii1NZ3XOpftMo");

const emailSubmit = document.querySelector('#email-submit');

emailSubmit.addEventListener('click', (e) => {

  let templateParams = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    subject: document.querySelector('#subject').value,
    message: document.querySelector('#email-message').value,
  };

  console.log(templateParams);
  functionEmail.emailjs.send('service_zv69q4e', 'template_9s2qvvt', templateParams)
         //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });  
});

