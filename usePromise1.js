// 1: Print " 1 C F" by using callbacks with `addStringWithCallback()`
// 2: Print " 2 C F" by using promises with `addStringWithPromise()`
// 3: Print " 3 C F" by using async/await with `addStringWithPromise()`

function addStringWithCallback (previous, current, callback) {
    setTimeout(() => {
      callback(null, previous + ' ' + current)
    }, Math.floor(Math.random() * 100));
}
  
function addStringWithPromise (previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previous + ' ' + current)
      }, Math.floor(Math.random() * 100));
    });
}

// put your code here

// 1
addStringWithCallback('', '1', (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    addStringWithCallback(result, 'C', (err, result) => {
      if (err) {
        console.error('Error:', err);
      } else {
        addStringWithCallback(result, 'F', (err, result) => {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});

// 2

addStringWithPromise('', '2')
  .then(result => addStringWithPromise(result, 'C'))
  .then(result => addStringWithPromise(result, 'F'))
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));

// 3
async function printAsync() {
  try {
    let result = await addStringWithPromise('', '3');
    result = await addStringWithPromise(result, 'C');
    result = await addStringWithPromise(result, 'F');
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

printAsync();
