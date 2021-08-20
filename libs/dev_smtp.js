function sendEmail() {
  // Get the form
  // <form name="contact-via-email" .....
  const quoteForm = document.forms.contactViaEmail;
  const formFields = quoteForm.elements;

  // Get the fields from the form
  const customerName = formFields.name.value;
  const customerEmail = formFields.email.value;
  const customerPhoneNumber = formFields.phone.value;
  const emailSubject = `${customerName} contacted via website`;
  const customerMessage = formFields.message.value ? formFields.message.value : '(N/A) Message was not provided by customer';
  const emailBody = `
  ${customerName}<br>
  ${customerPhoneNumber}<br>
  ${customerEmail}<br><br>
  Message:<br>
  ${customerMessage}
  `;

  const sendEmailTo = 'forsharedprojects@gmail.com';
  // const sendEmailTo = 'info@aulakhcraneservice.in';
  Email.send({
    // SecureToken: "temp-code-to-test-failed-delivery",    // port 587 use ssl w/ app password

    SecureToken: "fc7c72c2-43e5-492d-a22c-81500133febb",    // port 587 use ssl w/ app password
    To: sendEmailTo,
    From: customerEmail,
    Subject: emailSubject,
    Body: emailBody
  }).then(
    message => {
      message == 'OK' ? swal("Delivery Successful!", "Email was sent. We\'ll contact you shortly!", "success"):
      swal("Delivery Failed!", "Try calling us instead, and let us know email didn't work!", "error");
      // message == 'OK' ? alert('Email Sent. We\'ll contact you shortly') : alert('delivery failed, try calling us');
    }
    // message => messageWasSent('OK')
  );
}








// spent couple of hours to figure out how to use SMTP by gmail coz
// • it doesn't send email in SPAM unlike elastic-email
// • I don't think there is any limit on how many emails I can send
// • cheaper




// //  Code I didn't want to delete, coz it can be used for testing purpose.
// function sendEmail() {
  
//   // Elastic-Email credentials SecureToken, still works but email goes in SPAM
//   // let emailSubject = "Request Something";
//   let emailBody = "temporary body-placeholder. I'm really trying to think what I should send as a test email, like the body of the email as I don't want to use lorem ipsum coz it can be flagged as spam. Thank you :) so this is temporary text.";
//   Email.send({
//     // SecureToken: "538afa38-e8bf-4dba-bb5b-d7283e3422de", // the secure token is from elasticmail so mail goes to SPAM
//     SecureToken: "fc7c72c2-43e5-492d-a22c-81500133febb",    // port 587 use ssl w/ app password for forsharedprojects@gmail.com
    
//     To: 'ajeetshergill@gmail.com',
//     From: "forsharedprojects@gmail.com",
//     Subject: "Require a quote",
//     Body: `${emailBody}`
//   }).then(
//     message => alert(`${message}`)
//   );
// }