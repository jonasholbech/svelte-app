<script>
  import { onMount } from "svelte";

  let photos = [];

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
    photos = await res.json();
  });
</script>

<style>
  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

  figure,
  img {
    width: 100%;
    margin: 0;
  }
</style>

<h1>Photo album</h1>

<div class="photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
<p>runs after the component is first rendered to the DOM.</p>
<p>
  It's recommended to put the fetch in onMount rather than at the top level of
  the script because of server-side rendering (SSR). With the exception of
  onDestroy, lifecycle functions don't run during SSR, which means we can avoid
  fetching data that should be loaded lazily once the component has been mounted
  in the DOM.
</p>
<p>
  Lifecycle functions must be called while the component is initialising so that
  the callback is bound to the component instance — not (say) in a setTimeout.
</p>

<p>
  If the onMount callback returns a function, that function will be called when
  the component is destroyed. (is that the same as the onDestroy lifecycle
  method?)
</p>
