/*const quote = ['qi', 'q2', 'qi', 'q2', 'qi', 'q2', 'qi', 'q2', 'qi', 'q2'];

const randQuote = Math.floor(Math.random() * quote.length);
console.log(randQuote);

const submit = document.getElementById('sbtbtn');
submit.('click', () => {
	console.log('let fetch a quote');
});
*/

$(document).ready(function() {
	$("#new-quote").on('click', () => {
		const randQuoteNum = rand(quotes);
		const randColor = colors[rand(colors)];
		let data = "";
		let author = "";
		data += "<blockquote id='block'>" + quotes[randQuoteNum].quote + "</blockquote>";

		author += "<span>- " + quotes[randQuoteNum].author + "</span>";
		$("#quote-text").html(data);
		$("#author").html(author);
		$("body").css("background-color", randColor);
		$("#new-quote, #tweet").css("color",  "white");
		$("#new-quote, #tweet").css("background-color", randColor);
    $("#block").css("border-left-color", randColor);
	});
});

// quotes to be displayed
let quotes = [
  {
  "id": 1,
  "author": "Chris Rock",
  "quote": "There are only three things women nedd in life: food, water and compliments"
  },{
  "id": 2,
  "author": "Yani Tseng",
  "quote": "I will keep smiling, be positive and never give up! I will give !00 percent each ti,e I play. These are always my golas and attitude."
  },{
  "id": 3,
  "author": "Will Rogers",
  "quote": "Everything is funny, as long as it's happening to somebody else"
  },{
  "id": 4,
  "author": "St. Jerome",
  "quote": "Good, better, best. Never let it rest. 'Till your good is better and your better best."
  },{
  "id": 5,
  "author": "H. Jackson Brown Jr.",
  "quote": "Love is when the other person's happiness is more important than your own"
  },{
  "id": 6,
  "author": "George Sand",
  "quote": "There is only one happoness in this live; to love and be loved",
  },{
  "id": 7,
  "author": "Virat Kohli",
  "quote": "Self-belief and hard work will always earn you success",
  },{
  "id": 8,
  "author": "Jim Rohn",
  "quote": "happiness is not something you postpone for the future, it is something you design for the present",
  },{
  "id": 9,
  "author": "Steve Martin",
  "quote": "A day without sunshine is like, you know, night",
  },{
  "id": 10,
  "author": "Georeg Benard Shaw",
  "quote": "Life isn't about finding yourself. Life is about creating yourself",
  },{
  "id": 11,
  "author": "Willaim Authur Ward",
  "quote": "Gratitude can transform common days into thanksgivings, turn jobs into joy, and change ordinary opportunities into blessings",
  },{
  "id": 12,
  "author": "Oprah Winfrey",
  "quote": "Be thankful for what you have, you'll end up having more. If you concentrate on what you don't have, you will never have enough",
  },{
  "id": 13,
  "author": "George Benard Shaw",
  "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing"
  },
];

// list of colours fo background
//let colors = ["red", "blue", "green", "orange", "black", "darkblue", "green", "grey"];
let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

/**
* function to generate a random number between 0 and num.length
*/
const rand = num => Math.floor(Math.random() * num.length);