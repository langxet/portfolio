/* JavaScript Document
Michael Nguyyen
ICT 4510
Final Project
Date: 03/13/2014
this script is to validate the contact form, ensure the user fill in all the required fill otherwise it will not submit



*/

$(document).ready(function() {
 $('#myForm').validate({
   
   rules: {
     email: {
        required: true,
        email: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
      email: {
         required: "Please supply an e-mail address.",
         email: "This is not a valid email address."
       },
      password: {
        required: 'Please type a password',
        rangelength: 'Password must be between 8 and 16 characters long.'
      },
      confirm_password: {
        equalTo: 'The two passwords do not match.'
      }
   },
   errorPlacement: function(error, element) { 
       if ( element.is(":radio") || element.is(":checkbox")) {
          error.appendTo( element.parent()); 
        } else {
          error.insertAfter(element);
        } 
    } 

  }); // end validate 
}); // end ready