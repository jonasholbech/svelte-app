<script>
  import { count } from "./stores.js";
  import Incrementer from "./Inc.svelte";
  import Decrementer from "./Dec.svelte";
  import Resetter from "./Resetter.svelte";

  let count_value;

  const unsubscribe = count.subscribe(value => {
    count_value = value;
  });
</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />
<p>
  Not all application state belongs inside your application's component
  hierarchy. Sometimes, you'll have values that need to be accessed by multiple
  unrelated components, or by a regular JavaScript module.
</p>

<p>
  In Svelte, we do this with stores. A store is simply an object with a
  subscribe method that allows interested parties to be notified whenever the
  store value changes. In App.svelte, count is a store, and we're setting
  count_value in the count.subscribe callback.
</p>

<p>
  Click the stores.js tab to see the definition of count. It's a writable store,
  which means it has set and update methods in addition to subscribe.
</p>
