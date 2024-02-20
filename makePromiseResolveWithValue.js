/**
 * 
 * Should return promise with given value
 * 
 * @param {string} string - The input string
 * @returns {Promise<value>}
 */

function makePromiseResolveWith(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }
  
  makePromiseResolveWith(5)
    .then(result => {
      console.log('Resolved:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });

console.log(makePromiseResolveWith());