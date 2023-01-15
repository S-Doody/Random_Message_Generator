//Random message generator function
const randElement = arr => {
  const element = arr[Math.floor(Math.random() * arr.length)];
  return element;
};

//Decade Array
const decadeArr = ['80s', '90s', '2000s'];
 
//Genre Array
const genreArr = ['Rock', 'Pop', 'Hip-hop'];
 
//Song Quote Object
const songQuotes = {
 Eighties: {
   Rock: ['er0', 'er1', 'er2'],
   Pop: ['ep0', 'ep1', 'ep2'],
   hipHop: ['eh0', 'eh1', 'eh2'],
 },
 Nineties: {
   Rock: ['er0', 'er1', 'er2'],
   Pop: ['np0', 'np1', 'np2'],
   hipHop: ['nh0', 'nh1', 'nh2'],
 },
 twoThousands: {
   Rock: ['tr0', 'tr1', 'tr2'],
   Pop: ['tp0', 'tp1', 'tp2'],
   hipHop: ['th0', 'th1', 'th2'],
 }
 
};

//Random Decade and Random Genre Functions
let randDecade = randElement(decadeArr);
 
let randGenre = randElement(genreArr);

//80s quote generator variables
let randEightiesRock = randElement(songQuotes.Eighties.Rock);
let randEightiesPop = randElement(songQuotes.Eighties.Pop);
let randEightiesHipHop = randElement(songQuotes.Eighties.hipHop);
 
//90s quote generator variables
let randNinetiesRock = randElement(songQuotes.Nineties.Rock);
let randNinetiesPop = randElement(songQuotes.Nineties.Pop);
let randNinetiesHipHop = randElement(songQuotes.Nineties.hipHop);
 
//2000s quote generator variables
let randTwoThousandsRock = randElement(songQuotes.twoThousands.Rock);
let randTwoThousandsPop = randElement(songQuotes.twoThousands.Pop);
let randTwoThousandsHipHop = randElement(songQuotes.twoThousands.hipHop);

//Quote generator function
const quote = (D, G) => {
  if (D === '80s') {
    if (G === 'Rock') {
      return randEightiesRock;
    }
    if (G === 'Pop') {
      return randEightiesPop;
    }
    if (G === 'Hip-hop') {
      return randEightiesHipHop;
    }
  }
  if (D === '90s') {
    if (G === 'Rock') {
      return randNinetiesRock;
    }
    if (G === 'Pop') {
      return randNinetiesPop;
    }
    if (G === 'Hip-hop') {
      return randNinetiesHipHop;
    }
  }
  if (D === '2000s') {
    if (G === 'Rock') {
      return randTwoThousandsRock;
    }
    if (G === 'Pop') {
      return randTwoThousandsPop;
    }
    if (G === 'Hip-hop') {
      return randTwoThousandsHipHop;
    }
  }
 };
  
 //Print Decade Genre Quote
 console.log(`${randDecade} ${randGenre}: ${quote(randDecade, randGenre)}`);
 


