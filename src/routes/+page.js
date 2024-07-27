export const load = async ({ fetch }) => {
    const fetchtitles = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      //console.log('Fetched data:', data);  // Log to console for testing purposes
      return data;  
    }
  
    const data = await fetchtitles();  // Await the result of the asynchronous function
    //console.log('Posts:', data.posts);  // Log to console for testing purposes
  
    return {
      posts: data 
    };
  }
  