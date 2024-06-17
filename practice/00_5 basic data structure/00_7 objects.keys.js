// We can also generate an array which contains all the keys stored in an object with the Object.keys() method. 
// This method takes an object as the argument and returns an array of strings representing each property in the object. Again, 
// there will be no specific order to the entries in the array.
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    let arr = [];
    for (const x in obj){
      arr.push(x);
    }
    return arr;
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  //Exaple 1
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj['data']['friends'].push(friend);
    return userObj['data']['friends'];
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
  