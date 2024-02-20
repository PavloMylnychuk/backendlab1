// Use https://gorest.co.in/ REST API for Testing and Prototyping
// Write function to fetch data from https://gorest.co.in/public/v2/users
// This function should print in console array of obects with the following structure {id, name, email}
// and handle possible errors 

// put your code here
async function fetchUserData() {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const formattedData = data.data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));
  
      console.log(formattedData);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }
  
  fetchUserData();
  