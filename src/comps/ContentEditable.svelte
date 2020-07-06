<script>
  let html = "Write some text!";
  function handleBlur(e) {
    console.log(html);
  }
</script>

<style>
  [contenteditable] {
    --border: #eee;
    padding: 0.5em;
    border: 1px solid var(--border);
    border-radius: 4px;
  }
  [contenteditable]:focus {
    --border: green;
  }
</style>

<div contenteditable="true" on:blur={handleBlur} bind:innerHTML={html} />

<pre>{html}</pre>
<p>
  Slåsede en del med CSS classes, siden de er scoped kunne jeg ikke bruge
  classList agtigt halløj
</p>
