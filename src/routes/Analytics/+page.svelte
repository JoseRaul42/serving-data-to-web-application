<script>
  export let data = { posts: [] };  // Provide a default value
  console.log('Received data:', data);  // Log the received data
</script>

<div>
  {#if data.posts && data.posts.length > 0}
    {#each data.posts as post}
      <h1>{post.title}</h1>
    {/each}
  {:else}
    <p>No posts available</p>
  {/if}
</div>
