
// emailjs.sendForm('service_492v6mn', 'template_s7crucg', '#contactForm')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
 

$('#contactForm').on('submit', function(event) {
      event.preventDefault(); // prevent reload
      
      var formData = new FormData(this);
      formData.append('service_id', 'service_492v6mn');
      formData.append('template_id', 'template_s7crucg');
      formData.append('user_id', '31W2iXee8Lci24ojO');
   
      $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
          type: 'POST',
          data: formData,
          contentType: false, // auto-detection
          processData: false // no need to parse formData to string
      }).done(function() {
          alert('Your mail is sent!');
          $('#contactForm').trigger('reset');
      }).fail(function(error) {
          alert('Oops... ' + JSON.stringify(error));
      });
});

var url = 'https://api.emailjs.com/api/v1.1/history?user_id=31W2iXee8Lci24ojO&accessToken=gzq2xL2zvCBwAciDPgf-k&page=1&count=50';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
