import { writable, derived } from "svelte/store";

export const name = writable("world");

export const greeting = derived(name, ($name) => `Hello ${$name}`);

/*

If a store is writable — i.e. it has a set method — you can bind to its value, just as you can bind to local component state.

In this example we have a writable store name and a derived store greeting. Update the <input> element:

<input bind:value={$name}>

Changing the input value will now update name and all its dependents.

We can also assign directly to store values inside a component. Add a <button> element:

<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button>

The $name += '!' assignment is equivalent to name.set($name + '!').
*/
