<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  let visible = true;
</script>

<style>

</style>

<h2>toggle me</h2>
<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>
<div class="transitiongrid">
  <section>
    <h3>Simple in/out</h3>
    <div class="manual">
      .gracefully transitioning elements into and out of the DOM
    </div>

    {#if visible}
      <p transition:fade>Fades in and out</p>
    {/if}
  </section>
  <section>
    <h3>fly transition</h3>
    <div class="manual">
      Note that the transition is reversible — if you toggle the checkbox while
      the transition is ongoing, it transitions from the current point, rather
      than the beginning or the end.
    </div>
    {#if visible}
      <p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
    {/if}
  </section>
  <section>
    <h3>in / out</h3>
    <div class="manual">
      <p>
        Instead of the transition directive, an element can have an in or an out
        directive, or both together.
      </p>

      <p>In this case, the transitions are not reversed.</p>

    </div>
    {#if visible}
      <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
    {/if}
  </section>
</div>
