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
   Rock: ['A singer in a smokey room, a smell of wine and cheap perfume - Journey', 
   'Back in black, I hit the sack, I\'ve been too long, I\'m glad to be back - ACDC', 
   'Change, nothin\' stays the same, Unchained, and ya hit the ground runnin\' - Van Halen'],
   Pop: ['Yeah, I wanna dance with somebody, With somebody who loves me - Whitney Houston', 
   'So, Annie, are you okay?, Are you okay, Annie? - Michael Jackson', 
   'Take on me (take on me), Take me on (take on me), I\'ll be gone, In a day or two'],
   hipHop: ['You are now about to witness the strength of street knowledge - N.W.A.', 
   '(Ah, push it) push it real good - Salt-N-Pepa', 
   'I said-a hip, hop, the hippie, the hippie to the hip hip hop-a you don\'t stop the rock - The Sugarhill Gang'],
 },
 Nineties: {
   Rock: ['With the lights out, it\'s less dangerous, Here we are now, entertain us - Nirvana', 
   'I want something else to get me through this semi-charmed kinda life, baby, baby - Third Eye Blind', 
   'Say it ain\'t so my love is a life taker - Weezer'],
   Pop: ['I saw the sign and it opened up my eyes I saw the sign - Ace of Base', 
   'But we are two worlds apart, Can\'t reach to your heart, When you say, That I want it that way - Backstreet Boys', 
   'Say my name, say my name, If no one is around you, Say baby I love you, If you ain\'t runnin\' game - Destiny\'s Child'],
   hipHop: ['Now let me welcome everybody to the wild, wild west, A state that\'s untouchable like Elliot Ness - Tupac', 
   'I don\'t know what they want from me, It\'s like the more money we come across, The more problems we see - The Notorious B.I.G.', 
   'With my mind on my money and my money on my mind - Snoop Dogg'],
 },
 twoThousands: {
   Rock: ['Cut my life into pieces, I\'ve reached my last resort - Papa Roach', 
   'Standing in line to see the show tonight and there\'s a light on, heavy glow - Red Hot Chili Peppers', 
   'Can you take it all away? Can you take it all away? Well, you shoved it in my face, this pain you gave to me - Puddle of Mudd'],
   Pop: ['My baby don\'t mess around because she loves me so and this I know fo sho - OutKast', 
   'With a taste of your lips, I\'m on a ride, you\'re toxic, I\'m slippin\' under - Britney Spears', 
   'Whenever, wherever, we\'re meant to be together - Shakira'],
   hipHop: ['Go, shorty, it\'s your birthday, we gon\' party like it\'s your birthday - 50 Cent', 
   'When the pimp\'s in the crib ma drop it like it\'s hot - Snoop Dogg', 
   'Cutie the bomb, met her at a beauty salon with a baby Louis Vuitton under her underarm - Kanye West'],
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
 


