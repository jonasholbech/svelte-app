<script>
  import EventDispatcherChild from "./EventDispatcherChild.svelte";
  export let name;
</script>

<h3>
  Just a dumb components, does notthing but forward the mymessage dispatch thing
</h3>
<EventDispatcherChild {name} on:mymessage />
