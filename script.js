
//FIX THE QUOTE USING ARRAY METHODS

let quote1 =
  '"Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand." – Martin Fowler. Agile Software Design.';

console.log(quote1);

let favoriteQuote = quote1.split(" ");
favoriteQuote.pop();
favoriteQuote.push("Development", "ThoughtWorks", "Inc.");
favoriteQuote.splice(favoriteQuote.indexOf("body"), 1, "fool");
favoriteQuote.shift();
favoriteQuote.unshift('"Any');
favoriteQuote.splice(favoriteQuote.indexOf("very"), 5, "computer");

console.log(favoriteQuote.join(" "));
