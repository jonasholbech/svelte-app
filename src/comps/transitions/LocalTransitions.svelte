<script>
  import { slide } from "svelte/transition";

  let showItems = true;
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
  ];
</script>

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
  .innerGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
</style>

<label>
  <input type="checkbox" bind:checked={showItems} />
  show list
</label>

<label>
  <input type="range" bind:value={i} max="10" />

</label>

<div class="innerGrid">
  <section>
    <h3>with "local"</h3>
    {#if showItems}
      {#each items.slice(0, i) as item}
        <div transition:slide|local>{item}</div>
      {/each}
    {/if}
  </section>
  <section>
    <h3>Without "local"</h3>
    {#if showItems}
      {#each items.slice(0, i) as item}
        <div transition:slide>{item}</div>
      {/each}
    {/if}
  </section>
</div>
<div class="manual">
  <p>
    Ordinarily, transitions will play on elements when any container block is
    added or destroyed. In the example here, toggling the visibility of the
    entire list also applies transitions to individual list elements.
  </p>
  <p>
    Instead, we'd like transitions to play only when individual items are added
    and removed — in other words, when the user drags the slider.
  </p>
  <p>
    We can achieve this with a local transition, which only plays when the
    immediate parent block is added or removed:
  </p>
</div>
