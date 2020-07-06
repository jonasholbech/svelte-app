<script>
  import Keypad from "./ComponentBindingsChild.svelte";

  let pin;
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";

  function handleSubmit() {
    alert(`submitted ${pin}`);
  }
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad bind:value={pin} on:submit={handleSubmit} />
<p>
  Binding to component props (in this case the value prop, that is bound to pin
</p>
<p>In the child component, any changes to value is reflected on pin</p>
<p>
  Now, when the user interacts with the keypad, the value of pin in the parent
  component is immediately updated.
</p>

<p>
  Use component bindings sparingly. It can be difficult to track the flow of
  data around your application if you have too many of them, especially if there
  is no 'single source of truth'.
</p>
