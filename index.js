
var quote = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”",
  "“The only way out of the labyrinth of suffering is to forgive.”",
  "“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”",
  "“And, when you want something, all the universe conspires in helping you to achieve it.”",
];
var author = [
  "― Oscar Wilde",
  "― Marilyn Monroe",
  "― Frank Zappa",
  "― Albert Einstein",
  "― Marcus Tullius Cicero",
  "― Bernard M. Baruch",
  "― Mae West",
  "― Mahatma Gandhi",
  "― Robert Frost",
  "― Marilyn Monroe",
  "― John Green",
  "― Jess C. Scott",
  "― Paulo Coelho",
]


function randomQuoteGenerator() {


  var numberOfQuote = Math.floor(Math.random() * quote.length);


  
  document.getElementById("quote").innerHTML = quote[numberOfQuote];
  document.getElementById("author").innerHTML = author[numberOfQuote];
}

