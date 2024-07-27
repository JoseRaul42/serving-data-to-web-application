export const load = async ({ fetch }) => {
  const fetchtitles = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log('Fetched data:', data);  // Log the fetched data
    return data;  // Ensure to return the entire data object
  }

  const data = await fetchtitles();  // Await the result of the asynchronous function
  console.log('Posts:', data.posts);  // Log the posts

  return {
    posts: data  // Ensure the structure matches what your Svelte component expects
  };
}
