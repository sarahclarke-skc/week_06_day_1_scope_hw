// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// The murderer is Miss Scarlet, accessing the murderer through the dot

// Episode 2

const murderer = 'Professor Plum';

// can't reassign the murderer
const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

//can't call the function so murderer = Prof Plum
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
  //Mrs Peacock returned because declared inside this function
}

const firstVerdict = declareMurderer();
//decareMurderer returns Mrs. Peacock
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
//pulling murderer from line 37 --> Prof. Plum
console.log('Second Verdict: ', secondVerdict);

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  //Miss Scarlet, Professor Plum, Colonel Mustard
}

const suspects = declareAllSuspects();
//Mrs Peacock because line 59 only scope within that function
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
    // weapon = newWeapon instead of candle stick
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
    //newWeapon?

  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);
//   newWeapon --> reassigned to revolver in line 87

//   Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

    const plotTwist = function() {
    murderer = 'Mrs. White';
  }

    plotTwist();

} //95-102 one function? --> Mrs White

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); //Mrs. White
const verdict = declareMurderer(); //Mrs White
console.log(verdict);//Mrs White

// Episode 7 --> This one is a thinker
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer(); //117-118 --> Mr. Green?
const verdict = declareMurderer();
console.log(verdict);

// Episode 8
const scenario = {
    murderer: 'Mrs. Peacock', //Col. Mustard 153
    room: 'Conservatory', // changed to dining room 150, 153
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room'; // Dining Room
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard'; //Col. Mustard
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard'); //weapon --> candle stick
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon(); //candlestick bc Col Mustand passed as an argument and the value of scenario.murderer (157 -159)
  console.log(verdict);

//Episode 9 -->

let murderer = 'Professor Plum';
// console.log(murderer) --> Profressor Plum

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
//   console.log(murderer)--> Mrs Peacock so 'murderer' here is local?
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict); // Prof

