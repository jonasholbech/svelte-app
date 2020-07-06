<script>
  import { count } from "./stores.js";
  import Incrementer from "./Inc.svelte";
  import Decrementer from "./Dec.svelte";
  import Resetter from "./Resetter.svelte";
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
<p>you can reference a store value by prefixing the store name with $:</p>
<p>
  Auto-subscription only works with store variables that are declared (or
  imported) at the top-level scope of a component.
</p>
