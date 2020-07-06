<script>
  import { createEventDispatcher } from "svelte";
  export let name;
  let messageFromTheOtherSide;
  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("mymessage", {
      text: "Hello!" + name,
      status: "cool"
    });
  }
  //messages can be sent up the chain, not sideways it seems
  //send down is done though on:mymessage without a handler
</script>

<p>
  createEventDispatcher must be called when the component is first instantiated
  — you can't do it later inside e.g. a setTimeout callback. This links dispatch
  to the component instance.
</p>
<p>
  Regular event handlers can be sent the same way
  <a href="https://svelte.dev/tutorial/dom-event-forwarding">
    https://svelte.dev/tutorial/dom-event-forwarding
  </a>
</p>

<button on:click={sayHello}>Click to say hello (from {name})</button>
