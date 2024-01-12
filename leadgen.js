//Load code after webflow fully loaded
var Webflow = Webflow || [];
Webflow.push(function () {



//Loading flatpickr JS
	flatpickr(".date");

.flatpickr-mobile:before  {
		content: attr(placeholder);
		color: gray;
	  }
	  .flatpickr-mobile:focus[value]:not([value=""]):before {
		display: none;
	  }
	  
	  input[type="hidden"][value]:not([value=""]) + .flatpickr-mobile:before {
		display: none; 
	  }



});


  