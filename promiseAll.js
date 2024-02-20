/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delay 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function job(delay) {
    // put your code here
}

// Run 'job' function with delays 1000, 2000, 500, 1500 and 
// use Promise.all to print `done ${delay}` in console when every task is done

// put your code here
function job(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`done ${delay}`);
        resolve(value);
      }, delay);
    });
  }
  
  const delays = [1000, 2000, 500, 1500];
  
  Promise.all(delays.map(delay => job(`Value ${delay}`, delay)))
    .then(results => {
      console.log('All tasks are done:', results);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  