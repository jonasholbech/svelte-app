<script>
  function handleClick() {
    alert("no more alerts");
  }
</script>

<button on:click|once={handleClick}>Click me</button>
<h3>other options:</h3>
<ul>
  <li>
    preventDefault — calls event.preventDefault() before running the handler.
    Useful for client-side form handling, for example.
  </li>
  <li>
    stopPropagation — calls event.stopPropagation(), preventing the event
    reaching the next element passive — improves scrolling performance on
    touch/wheel events (Svelte will add it automatically where it's safe to do
    so)
  </li>
  <li>
    capture —fires the handler during the capture phase instead of the bubbling
    phase ( )
  </li>
  <li>once — remove the handler after the first time it runs</li>
  <li>self — only trigger handler if event.target is the element itself</li>
</ul>
<p>You can chain modifiers together, e.g. on:click|once|capture=...</p>
