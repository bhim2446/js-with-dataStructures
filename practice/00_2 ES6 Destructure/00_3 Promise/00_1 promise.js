// A promise has three states: pending, fulfilled, and rejected.
// The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
//The resolve and reject parameters given to the promise argument are used to do this. 
//resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
//These are methods that take an argument, as seen below.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful  response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });