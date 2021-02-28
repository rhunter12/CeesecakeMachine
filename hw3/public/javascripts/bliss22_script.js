// Ryan Hunter-Bliss

$(function() {
	// on click of submit button
	$('#run').click(function() {
		var notes = $('#txt').val();
		
		// case 1: notes contains vegan keyword
		if (notes.toLowerCase().includes("vegan")) {
			alert("Cheesecake has dairy and it is not vegan.");
		}
		// case 2: order is submitted
		else {
			//save qty and topping variables
			var qty = $('#quantity option:selected').text();
			var topping = $("input[name='topping']:checked").val();
			
			//print the results
			$('#summary').text("Thank you! Your order has been placed.");
			$('#qty').text("Quantity: " + qty);
			$('#top').text("Topping: " + topping);
			$('#notes').text("Notes: " + notes);
			
			//hide the order area
			$('#orderArea').hide();
		}
	});

	$('.month').click(function() {
		//hide the default data and previous data
		$('#presetOrders').hide();
		$('#monthSummary').text("");
		//get orders from server
		$.post("/orders",{},
		function(obj, status) {
			//for each item in json, ...
			$.each(obj, function(index, item) {
				var name;
				//... print the qty and topping
				for (name in item) {
					$('#monthSummary').append("- " + obj.data[name].quantity + " " + obj.data[name].topping).append("<br/>");
				}
			});
		});
	});	
});