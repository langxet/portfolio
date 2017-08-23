/* JavaScript Document
Michael Nguyyen
ICT 4510
Final Project
Date: 03/13/2014
This script will be validate the input for registration, if no name, email, passwod etc to input the form will not be process. Also, it you Ajax to submit form so it required to run on a websever such as Apache or IIS.

*/
$(document).ready( function(){
	
	$("#submit").click(function(){
		 if ( $("#username").val() == ""|| $("#password").val() == "" &&  $("#fname").val()==""||$("#lname").val() == "")   
		  
		 
		         
		          
		   $("#ack").html("Username/Password are mandatory fields -- Please Enter.");
		   else
		
		  $.post ($("#signup").attr("action"),
		         $("#signup :input").serialize(),
				  function(info) {
					  
					  $("#ack").empty();
					  $("#ack").html(info);
					    clear();
					  
				  });//end call back
		
		$("#signup").submit(function()  {
			  return false;
		
		
		
		});
		
		
	});//end click
	
	function clear(){
	  $("#signup :input").each( function() {
		  
		  $(this).val("");
		  });	
	}
	 $('#signup').validate({
   
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
	
	
});//end ready