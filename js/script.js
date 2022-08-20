/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
  //console.log('test');

  const quotes = [
    { quote: '"We must try not to sink beneath our anguish, Harry, but battle on it."', 
      source: '-Albus Dumbledore', 
      citation: 'The Half-Blood Prince' 
                },
    { quote: '“I wake up every morning determined to both change the world and have on hell of a good time. Sometimes this makes planning my day difficult.”', 
      source:  '-E.B. White' 
                },
    { quote: '“As soon as you trust yourself, you will know how to live.”', 
       source: 'Johann Wolfgang von Goethe'
                 },
    { quote: '“I live my life in widening circles that reach out across the world.”', 
      source:  '-Ranier Maria Rilke' 
              },
    { quote: '“Clear a path by walking it, boldly.”', 
      source:    '-Tara Mohr', 
      year:     '2021' 
              },
    { quote: '”The problem is not the problem. The problem is your attitude about the problem. Do you understand?”', 
      source:    '-Captain Jack Sparrow', 
      citation: 'Pirates of the Carribean Curse of the Black Pearl' 
              },
    { quote: '“Some natures are too noble to curb and too lofty to bend.”', 
      source:    '-L.M. Alcott' 
              },
    { quote: '“I can accept failure, everyone fails at something. I can\'t accept not trying.”', 
      source:    '-Michael Jordan' 
              },
    { quote: '“The world is not in your books and maps. It’s out there.”', 
      source:    '-Gandolf the Grey', 
      citation: 'The Hobbit an Unexpected Adventure' 
              },
    { quote: '“Out beyond ideas of wrongdoing and rightdoing there is a field. I’ll meet you there. When the soul lies down in that grass, the world is too full to talk about. Ideas, language, even the phrase each other doesn’t make any sense.”', 
      source:     '-Jelaluddin Rumi'
              }

  ];

console.log(quotes);

/***
 * `getRandomQuote` function
***/
// 1. Create a variable that generates a random number between 0 and the last index in the 'quotes' array
    function getRandomQuote (array) {
      let randomNumber = Math.floor(Math.random() * array.length );
      const myQuotesList = array[randomNumber]; 
      return myQuotesList;
    };

   // getRandomQuote;
// 2. Use the random number variable and bracket notation to grab a random object from the 'quotes' array, and store it in a variable
      
// 3. Return the variable storing the random quote object
        


/***
 * `printQuote` function
***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
     const randQuote = getRandomQuote(quotes);

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

    const QuoteDetails = `<p class="quotes">randomQuote.quote</p>
                            <p class="source">randomQuote.source
                               <span class="citation">randQuote.citation</span>
                                   <span class="year">randQuote.year</span>
                                     </p>`

 if (randQuote.quote) {
              QuoteDetails += `<p> ${randQuote.quote}</p>`;
                                
    }
    if (randQuote.source) {
              QuoteDetails += `<p> ${randQuote.source}</p>`;
                                     
         }


  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
}

QuoteDetails = document.getElementById('quote-box').innerHTML;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);