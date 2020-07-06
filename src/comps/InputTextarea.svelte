<script>
  import marked from "marked";
  let name = "world";
  let textValue = "default **text**";
  let a = 1;
  let b = 2;
</script>

<input bind:value={name} />
<p>Heres the value: {name}</p>
<p>Svelte automatically "coerces" the input to number when needed</p>
<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
<textarea bind:value={textValue} />
<!-- <textarea bind:value={value} /> === <textarea bind:value />-->
<p>
  Textvalue:
  {@html marked(textValue)}
</p>
