// At their most basic, objects are just collections of key-value pairs. 
// In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). 
// Take a look at an example:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
// The above code defines a Tekken video game character object called tekkenCharacter. 
// It has three properties, each of which map to a specific value. 
// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

tekkenCharacter.origin = 'South Korea';
// This uses dot notation. If you were to observe the tekkenCharacter object, it will now include the origin property. 
// Hwoarang also had distinct orange hair. 
// You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange';
// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
// In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. 
// Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. 
// Here's an example with a variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
// After adding all the examples, the object will look like this:

// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };

// A foods object has been created with three entries. 
// Using the syntax of your choice, add three more entries to it: 
// bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.apples;
  // Only change code above this line
  
  console.log(foods);

//   Now we can add, modify, and remove keys from objects. 
// But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the in keyword. 
// If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// Both of these would return true.

// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;    
  
  // Only change code above this line
}