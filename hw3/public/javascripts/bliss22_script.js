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


			//send the order to the server
			$.post("/neworder", {quantity: qty, toppings: topping, note: notes});

			//hide the order area
			$('#orderArea').hide();
		}
	});

	$('.month').click(function() {
		//hide the default data and previous data
		var monthSelected = $(this).attr('id');

		var sqlFetch = "SELECT * FROM ORDERS WHERE MONTH = '" + monthSelected + "'"

		$('#presetOrders').hide();
		$('#monthSummary').text("");
		//get orders from server
		$.post("/orders",{query: sqlFetch},
		function(obj, status) {
			
			var totalQtyPlain = 0;
			var totalQtyCherry = 0;
			var totalQtyChoco = 0;
			
			//for each item in json, count number of instances
			$.each(obj, function(index, item) {
				if (item.TOPPING == 'plain') {
					totalQtyPlain += item.QUANTITY;
				}
				else if (item.TOPPING == 'cherry') {
					totalQtyCherry += item.QUANTITY;
				}
				else if (item.TOPPING == 'chocolate') {
					totalQtyChoco += item.QUANTITY;
				}
			});

			//print the results
			$('#monthSummary').append("- " + totalQtyPlain + " plain").append("<br/>");
			$('#monthSummary').append("- " + totalQtyCherry + " cherry").append("<br/>");
			$('#monthSummary').append("- " + totalQtyChoco + " chocolate").append("<br/>");
		});
	});
});