function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
  checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle');