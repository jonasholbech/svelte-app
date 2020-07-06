<script>
  import Item from "./Item.svelte";
  let items = [
    { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) },
    { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) },
    { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) },
    { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) },
    { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) }
  ];
  setInterval(() => {
    items = [
      ...items,
      { id: Math.random(), name: "Foo", value: Math.floor(Math.random() * 20) }
    ];
    if (items.length > 5) {
      items = items.slice(1, 6);
    }
  }, 2000);
</script>

<h3>Each</h3>
<ul>
  <!-- (item.id) is the key, like reacts key="", can use object as key, but strings/numbers are safer-->
  {#each items as item, index (item.id)}
    <Item {...item} />
  {/each}
</ul>
<h4>Destructured</h4>
<ul>
  {#each items as { name, value, id } (id)}
    <Item {name} {value} />
  {/each}
</ul>
