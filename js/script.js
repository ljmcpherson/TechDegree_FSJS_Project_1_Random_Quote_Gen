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

  /**
   * This code is set-up to create a website that randomly generates different quotations to the page when a button on the page
   * is pressed. 
   */

  const quotes = [
    { quote: 'We must try not to sink beneath our anguish, Harry, but battle on it.', 
      source: '-Albus Dumbledore', 
      citation: 'Harry Potter and The Half-Blood Prince', 
      year:     '2009'
                },
    { quote: 'I wake up every morning determined to both change the world and have on hell of a good time. Sometimes this makes planning my day difficult.', 
      source:  '-E.B. White' 
                },
    { quote: 'As soon as you trust yourself, you will know how to live.', 
       source: 'Johann Wolfgang von Goethe'
                 },
    { quote: 'I live my life in widening circles that reach out across the world.', 
      source:  '-Ranier Maria Rilke' 
              },
    { quote: 'Clear a path by walking it, boldly.', 
      source:    '-Tara Mohr', 
      citation: 'Email Newsletter', 
      year:     '2021' 
              },
    { quote: 'The problem is not the problem. The problem is your attitude about the problem. Do you understand?', 
      source:    '-Captain Jack Sparrow', 
      citation: 'Pirates of the Carribean Curse of the Black Pearl',
      year:      '2003'
              },
    { quote: 'There are some natures are too noble to curb and too lofty to bend.', 
      source:    '-Abba Alcott',
      citation:  'Advice she gave to her daughter Louisa May Alcott'
              },
    { quote: 'I can accept failure, everyone fails at something. I can\'t accept not trying.', 
      source:    '-Michael Jordan',
      citation:  'I Can\'t Accept Not Trying: Michael Jordan on the Pursuit of Excellence',
      year:      '1994'
              },
    { quote: 'The world is not in your books and maps. It’s out there.', 
      source:    '-Gandolf the Grey to Bilbo Baggins', 
      citation: 'The Hobbit: An Unexpected Adventure',
      year:     '2012'
              },
    { quote: 'Out beyond ideas of wrongdoing and rightdoing there is a field. I’ll meet you there. When the soul lies down in that grass, the world is too full to talk about. Ideas, language, even the phrase each other doesn’t make any sense.', 
      source:     '-Jelaluddin Rumi'
              },
   { quote: 'You can fail at what you don\’t want, so you might as well take a chance on what you love.', 
    source:    '-Jim Carrey', 
    citation: 'Commencement Speech Maharishi International University',
    year:     '2014'
                      },
 { quote: 'Children aren\'t coloring books. You don\'t get to fill them with your favorite colors.', 
   source:    '-Rahim Khan to Baba', 
   citation: 'The Kite Runner',
   year:     '2003'
                   },

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

    let QuoteDetails = `<p class="quote">${randQuote.quote}</p>
                            <p class="source">${randQuote.source}`

// 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check if the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
                                 
 if (randQuote.citation) {
              QuoteDetails += `<span class="citation">${randQuote.citation}</span>`;
                                
    }
    if (randQuote.year) {
              QuoteDetails += `<span class="year">${randQuote.year}</span>`;
                                     
         }

// 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
         QuoteDetails += `</p>`;

 // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

         document.getElementById('quote-box').innerHTML = QuoteDetails; 
        }
  

 


// Extra Credit

//

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);