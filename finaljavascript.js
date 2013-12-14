//final javascript


$( window ).resize(function(){
	console.log("Width on resize: ", $(window).width());
});


$( window ).load(function(){
		console.log("Width on load: ", $(window).width());
});

$(document).ready( function(){
		$('img').on("click", function() {
				console.log("alt: ",this.alt);
				console.log("width: ",this.width);
				console.log("height: ",this.height);
			});
		
			
			$( ".box" ).on('click', function() {
				$( ".box" ).animate({
					width: "150px",
					height: "100px",
					'font-size': "20px",
					'border-radius': "10px"
					}, 1500 );
			});
			
			$('h1').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			$('h2').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			$('h3').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			$('h4').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			$('h5').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			$('h6').on("click", function() {
				console.log("text: ",$(this).text());
				console.log("color: ",$(this).css("color"));
				console.log("font-size: ",$(this).css("font-size"));
			});
			
			
});

