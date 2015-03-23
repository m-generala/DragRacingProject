$(document).ready(function() {
		"use strict"
			var usersB = $("#users");
		usersB.click(function(){
		alert("users");
		});
	
		var eventB = $("#events");
		eventB.click( function() {
		$.ajax("http://private-3387d-project17.apiary-mock.com/contenders",{
            method:"GET"
       }).then(function(data) {
		console.log("ID: " + data.id);
	});
		});
	});