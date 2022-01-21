const quotes = [
    {quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
     author: "Winston S. Churchill",
    },
    {quote: "It is better to fail in originality than to succeed in imitation.", 
     author: "Herman Melville"
    },
    {quote: "The road to success and the road to failure are almost exactly the same.", 
     author: "Colin R. Davis"
    },
    {quote: "Success usually comes to those who are too busy to be looking for it.", 
     author: "Henry David Thoreau"
    },
    {quote: "Opportunities don't happen. You create them.", 
     author: "Chris Grosser"
    },
    {quote: "Don't be afraid to give up the good to go for the great.", 
     author: "John D. Rockefeller"
    },
    {quote: "I find that the harder I work, the more luck I seem to have.", 
     author: "Thomas Jefferson"
    },
    {quote: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.", 
     author: "Ray Goforth"
    },
    {quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.", 
     author: "Jim Rohn"
    },
    {quote: "Try not to become a man of success. Rather become a man of value.", 
     author: "Albert Einstein"
    } 
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;