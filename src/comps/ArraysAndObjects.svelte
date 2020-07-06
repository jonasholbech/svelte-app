<script>
  let numbers = [];
  //onclick, cannot push to numbers, unless i do a numbers=numbers
</script>

<button
  on:click={() => {
    numbers = [...numbers, Math.floor(Math.random() * 10)];
  }}>
  Add
</button>
<div>Numbers: {numbers.join(',')}</div>
