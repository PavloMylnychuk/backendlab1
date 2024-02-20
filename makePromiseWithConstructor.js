/**
 * 
 * the promise should resolve or reject depending on itShouldResolve value
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
    return new Promise((resolve, reject) => {
      if (itShouldResolve) {
        resolve('Promise resolved successfully');
      } else {
        reject('Promise rejected');
      }
    });
  }
  
  const shouldResolve = true; 
  const promise = makePromiseWithConstructor(shouldResolve);
  
  promise
    .then(result => {
      console.log('Resolved:', result);
    })
    .catch(error => {
      console.error('Rejected:', error);
    });
