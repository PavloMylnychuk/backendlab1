/**
 * 
 * Should return promise with error
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
    return new Promise((resolve, reject) => {
      reject("Boo!");
    });
  }
  
  makePromiseRejectWithBoo()
    .then(result => {
      console.log('Resolved:', result);
    })
    .catch(error => {
      console.error('Rejected:', error);
    });
    
    console.log(makePromiseRejectWithBoo());