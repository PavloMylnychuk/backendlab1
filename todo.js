async function fetchData() {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/todos');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const formattedData = data.data.map(todo => ({
        id: todo.id,
        title: todo.title,
        user_id: todo.user_id,
        due_on: todo.due_on
      }));
  
      console.log(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  fetchData();
  