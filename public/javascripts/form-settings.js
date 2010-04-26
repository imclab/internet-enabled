// prepare the form when the DOM is ready 
$(document).ready(function() { 
    var options = { 
        beforeSubmit:  validate,
        success:       showResponse
    };
    $('#contact-form').ajaxForm(options); 
}); 

function showResponse(responseText, statusText){
	$('#success').animate({ opacity: "show" }, "fast");
	$('input.send').animate({ opacity: "hide" }, "fast")
}
				
function validate(formData, jqForm, options) {
	$("li.error").animate({ opacity: "hide" }, "slow");
			 
	var nameValue = $('input[name=name]').fieldValue(); 
	var subjectValue = $('input[name=subject]').fieldValue(); 
	var emailValue = $('input[name=email]').fieldValue();
	var messageValue = $('textarea[name=message]').fieldValue(); 
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var correct = true;
	
	if (!nameValue[0]) {
		$("li.error.wrong_name").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!emailValue[0]) {
		$("li.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	} else if(!emailReg.test(emailValue[0])) {
		$("li.error.wrong_email").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!messageValue[0]) {
		$("li.error.wrong_message").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!subjectValue[0]) {
		$("li.error.wrong_subject").animate({ opacity: "show" }, "slow");
		correct = false;
	}
	
	if (!correct) {return false;}
} 	

				
$("p#success").click( function () { 
	$(this).animate({ opacity: "hide" }, "slow"); 
	
});