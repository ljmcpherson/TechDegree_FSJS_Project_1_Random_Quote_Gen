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
    { property7: '“Some natures are too noble to curb and too lofty to bend.”', 
      source:    '-L.M. Alcott' 
              },
    { property8: '“I can accept failure, everyone fails at something. I can\'t accept not trying.”', 
      source:    '-Michael Jordan' 
              },
    { property9: '“The world is not in your books and maps. It’s out there.”', 
      source:    '-Gandolf the Grey', 
      citation: 'The Hobbit an Unexpected Adventure' 
              },
    { property10: '“Out beyond ideas of wrongdoing and rightdoing there is a field. I’ll meet you there. When the soul lies down in that grass, the world is too full to talk about. Ideas, language, even the phrase each other doesn’t make any sense.”', 
      source:     '-Jelaluddin Rumi'
              }

  ];

console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);