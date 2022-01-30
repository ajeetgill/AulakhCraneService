// function sendEmail() {
//   console.log('Sending email......');
//   // Get the form
//   // <form name="contact-via-email" .....
//   const quoteForm = document.forms.contactViaEmail;
//   const formFields = quoteForm.elements;

//   // Get the fields from the form
//   const customerName = formFields.name.value;
//   const customerEmail = formFields.email.value;
//   const customerPhoneNumber = formFields.phone.value;
//   const emailSubject = `${customerName} contacted via website`;
//   const customerMessage = formFields.message.value ? formFields.message.value : '(N/A) Message was not provided by customer';
//   const emailBody = `
//   ${customerName}<br>
//   ${customerPhoneNumber}<br>
//   ${customerEmail}<br><br>
//   Message:<br>
//   ${customerMessage}
//   `;

//   // const sendEmailTo = 'forsharedprojects@gmail.com';
//   const sendEmailTo = 'info@annr.ca';
//   // const sendEmailTo = 'info@aulakhcraneservice.in';
//   Email.send({
//     // SecureToken: "temp-code-to-test-failed-delivery",    // port 587 use ssl w/ app password

//     // SecureToken: "fc7c72c2-43e5-492d-a22c-81500133febb",    // port 587 use ssl w/ app password
//     // SecureToken: "bd1f8ada-b30b-410d-b896-9cb544c79b20",    // port 587 use ssl w/ app password
//     // SecureToken: "93dafe0a-e172-40ec-a2ee-75b09d59e797",    // port 465 use ssl w/ smtp.zoho.com no domain
//     SecureToken: "3967f5e0-43a1-47c8-a637-d8933390976b",    // port 465 use ssl w/ smtppro.zoho.com *.annr.ca
//     SecureToken: "ce4d7776-a8e6-4d7b-b633-3bf61c50ce43",    // port 465 use ssl w/ smtppro.zoho.com annr.ca
//     // Praveen from Zoho: call Zoho and ask to talk to praveen
//     // Host : "smtp.zoho.com",
//     // Username : "info@annr.ca",
//     // Password : "Waheguru0031!", //TLS: 578 // SSL: 465
//     To: sendEmailTo,
//     From: customerEmail,
//     Subject: emailSubject,
//     Body: emailBody
//   }).then(
//     message => {
//       message == 'OK' ? swal("Delivery Successful!", "Email was sent. We\'ll contact you shortly!", "success"):
//       swal("Delivery Failed!", "Try calling us instead, and let us know email didn't work!", "error");
//       message == 'OK' ? console.log(message) : console.log(message);
//       // message == 'OK' ? alert('Email Sent. We\'ll contact you shortly') : alert('delivery failed, try calling us');
//     }
//     // message => messageWasSent('OK')
//   );
// }


function sendEmail() {
  console.log('Sending email......');
  let emailBody = "temporary body-placeholder. I'm really trying to think what I should send as a test email, like the body of the email as I don't want to use lorem ipsum coz it can be flagged as spam. Thank you :) so this is temporary text.";
  Email.send({
    SecureToken: "337fe9e8-966d-4302-a206-831fd50bd1e0",    // smtp.zoho.com | no domain | port 587 use ssl w/ // ERROR: 
        // SecureToken: "fc7c72c2-43e5-492d-a22c-81500133febb",    // port 587 use ssl w/ 
    To: 'test@annr.ca',
    // From: 'test@annr.ca',
    From: 'forsharedprojects@gmail.com',
    // To: 'forsharedprojects@gmail.com',
    // From: 'test@annr.ca',
    Subject: 'Testing',
    Body: emailBody
  }).then(
    message => {
      message == 'OK' ? swal("Delivery Successful!", "Email was sent. We\'ll contact you shortly!", "success"):
      swal("Delivery Failed!", "Try calling us instead, and let us know email didn't work!", "error");
      console.log(message);
    }
  );
}
// function sendEmail() {
//   console.log('Sending email......');
//   let emailBody = "temporary body-placeholder. I'm really trying to think what I should send as a test email, like the body of the email as I don't want to use lorem ipsum coz it can be flagged as spam. Thank you :) so this is temporary text.";
//   Email.send({
//     // SecureToken: "ce8a1455-0719-44fc-b991-a33f3fbaa9e1",    // smtp.zoho.com | no domain | port 465 use ssl w/ // ERROR: Failure sending mail. - Fix: Try a different SMTP server : https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c
//     // SecureToken: "50858276-28bb-4fd9-9b1e-e51207ce6941",    // smtppro.zoho.com | no domain | port 465 use ssl w/ // ERROR: Failure sending mail. - Fix: Try a different SMTP server : https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c
//     // SecureToken: "f6ae302d-b6ff-4fa0-95cc-238b65f56643",    // smtppro.zoho.com | no domain | port 587 use ssl w/ // ERROR: 
//     SecureToken: "337fe9e8-966d-4302-a206-831fd50bd1e0",    // smtp.zoho.com | no domain | port 587 use ssl w/ // ERROR: 
//     To: 'test@annr.ca',
//     From: 'test@annr.ca',
//     // From: 'forsharedprojects@gmail.com',
//     Subject: 'Testing',
//     Body: emailBody
//   }).then(
//     message => {
//       message == 'OK' ? swal("Delivery Successful!", "Email was sent. We\'ll contact you shortly!", "success"):
//       swal("Delivery Failed!", "Try calling us instead, and let us know email didn't work!", "error");
//       console.log(message);
//     }
//   );
// }

// D943992056E87FC94AD236170DDB93682379 | test@annr.ca | smtp.elasticemail.com | 2525



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


// support@zohomail.com | the script isn't working
// I'll make a small project inclduing the scriptu and send it feom my own gmail mentioneing my ZohoID | from forsharedprojects