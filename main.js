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



