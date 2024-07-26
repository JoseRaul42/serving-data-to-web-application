<script>
	import '../app.css';
	import Header from './Header.svelte'; // Correcting the file name casing
  </script>
  
  <div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
	  <slot></slot>
	</main>
	<footer class="bg-background text-foreground py-4 text-center border-t">
	  <p>
		All data sourced from
		<a href="https://www.congress.gov" class="text-primary hover:underline" target="_blank">
		  Congress.gov
		</a> API
	  </p>
	</footer>
  </div>
  