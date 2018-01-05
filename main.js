
$(document).ready(function(){
	// declare colours to be used
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c',
					'#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99",
					"#77B1A9", "#73A857"];

	// get html elements as variables
	var newQuoteBtn = $("#new-quote-btn");
	var quote = $("#quote");
	var author = $("#author");
	var body = $("body");
	var colorCounter = 0;

	// URL for retrieving quote
	var URL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?"

	// set default bg colour for body
	body.css("background-color", colors[colorCounter]);

	// get new quote from quotes on design API each time new quote btn is clicked
	function getNewQuoteChangeBg(){
		//  FIX THIS API CALL
		$.getJSON(URL, function(json){
			// change contents on HTML elements
			quote.html(json[0].content);
			author.html(json[0].title);
			// change colour of button
			changeBgBtnColour();
		});
	}
	// change colour of background and btn each time newQuoteBtn is click
	// define event handler
	function changeBgBtnColour(){
		colorCounter = colorCounter + 1;
		// change bg colours of body and btn
		newQuoteBtn.css("background-color", colors[colorCounter]);
		body.css("background-color", colors[colorCounter]);
		// check if last colour was reached
		if (colorCounter === colors.length - 1) {
			colorCounter = -1;
		}
	}

	// add event listener to button
	newQuoteBtn.on("click", getNewQuoteChangeBg);

});