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
   * This code is designed to create a website that randomly generates different quotations to the page when a button on the page
   * is pressed. There are 12 quotations in the `quotes` array and each object has an amalgamation of properties, e.g. quote, source, citation and year.
   * 
   */

  const quotes = [
    { quote: 'We must try not to sink beneath our anguish, Harry, but battle on it.', 
      source: 'Albus Dumbledore', 
      citation: 'Harry Potter and The Half-Blood Prince', 
      year:     '2009',
      tag:       'Practical Wisdom'
                },
    { quote: 'I wake up every morning determined to both change the world and have on hell of a good time. Sometimes this makes planning my day difficult.', 
      source:  'E.B. White',
      tag:       'Perspecitve'
                },
    { quote: 'As soon as you trust yourself, you will know how to live.', 
       source: 'Johann Wolfgang von Goethe',
       tag:       'Philosophical'
                 },
    { quote: 'I live my life in widening circles that reach out across the world.', 
      source:  'Ranier Maria Rilke',
      tag:       'Poetry' 
              },
    { quote: 'Clear a path by walking it, boldly.', 
      source:    'Tara Mohr', 
      citation: 'Email Newsletter', 
      year:     '2021',
      tag:       'Inspirational'
              },
    { quote: 'The problem is not the problem. The problem is your attitude about the problem. Do you understand?', 
      source:    'Captain Jack Sparrow', 
      citation: 'Pirates of the Carribean Curse of the Black Pearl',
      year:      '2003',
      tag:       'Perspective'
              },
    { quote: 'There are some natures are too noble to curb and too lofty to bend.', 
      source:    'Abba Alcott',
      citation:  'Words of wisdom with which she consoled her daughter, Louisa May Alcott',
      tag:       'Inspirational'
              },
    { quote: 'I can accept failure, everyone fails at something. I can\'t accept not trying.', 
      source:    'Michael Jordan',
      citation:  'I Can\'t Accept Not Trying: Michael Jordan on the Pursuit of Excellence',
      year:      '1994',
      tag:       'Inspirational'
              },
    { quote: 'The world is not in your books and maps. It’s out there.', 
      source:    'Gandolf the Grey to Bilbo Baggins', 
      citation: 'The Hobbit: An Unexpected Adventure',
      year:     '2012',
      tag:       'Practical Wisdom'
              },
    { quote: 'Out beyond ideas of wrongdoing and rightdoing there is a field. I’ll meet you there. When the soul lies down in that grass, the world is too full to talk about. Ideas, language, even the phrase each other doesn’t make any sense.', 
      source:     'Jelaluddin Rumi',
      tag:       'Poetry'
              },
   { quote: 'You can fail at what you don\’t want, so you might as well take a chance on what you love.', 
    source:    'Jim Carrey', 
    citation: 'Commencement Speech at Maharishi International University',
    year:     '2014',
    tag:       'Inspirational'
                      },
 { quote: 'Children aren\'t coloring books. You don\'t get to fill them with your favorite colors.', 
   source:    'Rahim Khan to Baba', 
   citation: 'The Kite Runner',
   year:     '2003',
   tag:       'Perspective'
                   },

  ];

console.log(quotes);

/***
 * `getRandomQuote` function
***/
// 1. A variable has been created that generates a random number between 0 and the last index in the 'quotes' array, i.e. 12.
    function getRandomQuote (array) {
      let randomNumber = Math.floor(Math.random() * array.length );
      const myQuotesList = array[randomNumber]; 
      return myQuotesList;
    };

   
// 2. The random number variable and bracket notation has been used to grab a random object from the 'quotes' array, and stored in the variable `randQuote`
      
// 3. The variable storing the random quote object, i.e. getRandomQuote has been returned

    // getRandomQuote;
        


/***
 * A function called `printQuote` has been created that stores...
***/
function printQuote() {
  // 1. A variable that calls the getRandomQuote() 
  // function has been created, i.e. `randQuote`

     const randQuote = getRandomQuote(quotes);

  // 2. A variable that initiates the HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties has been created, but
  // the second closing `</p>` tag has been left-off for now

    let QuoteDetails = `<p class="quote">${randQuote.quote}</p>
                            <p class="source">${randQuote.source}`

// 3. One of three `if` statements has been created to check if the citation property 
  // exists, and if it does, a <span></span> 
  // element, appropriate className, and citation property is concatenated
  // to the HTML string 
                                 
 if (randQuote.citation) {
              QuoteDetails += `<span class="citation">${randQuote.citation}</span>`;
              }

// 4. Two of three `if` statements has been created to check if the year property exists, 
  // and if it does, a <span></span> element, 
  // appropriate className, and year property is concatenated to the HTML 
  //string
                                
    
    if (randQuote.year) {
              QuoteDetails += `<span class="year">${randQuote.year}</span>`;
                                     
         }
// EXTRA CREDIT. Three of three `if` statements has been created to check if the tag property exists, 
  // and if it does, a <span></span> element, 
  // appropriate className, and year property is concatenated to the HTML 
  //string

  if (randQuote.tag) {
    QuoteDetails += `<span class="year">${randQuote.tag}</span>`;
                           
}

// 5. After the two `if` statements, the closing </p> 
  // tag are concatenated to the HTML string
         QuoteDetails += `</p>`;

 // 6. The innerHTML of the quote-box div is set to equal the 
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