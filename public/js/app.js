$(document).ready(function() {


	$("#createNote").click(function() {
		console.log("clicked");

	  	$("#createModal").modal("show");
		// $.post("/noteslist/" {
		// 	title: title
		// }, function(data) {
		// 	console.log("made the request.");
		// 	console.log(data);

		// });
		/*
		write the code that will call a route to the routes file, add the note 
		with the appropriate info (name, date, body) and add that record
		in the database then render the results. will 
		need to make an ajax request to page-routes.js
		*/
		return false;
	});


	$("#deleteNote").on("click", function() {
		/*
		this can be done later. write the code that will call
		a route to the routes file, delete the note that was selected
		in the database, and delete it, then render the results. will 
		need to make an ajax request to page-routes.js
		*/
	})





}) // document.ready END //	
