<script>
  let count = 0;
  let age = 42;
  //reactive declaration
  //(could just use {count*2} in render though)
  $: double = count * 2;
  //reactive statement, runs when count changes
  $: console.log(count);
  $: console.log(age);
  //conmditional reactive statement
  $: if (count > 2) {
    console.log(count, "is bigger than 2");
  }
  function incDec(e) {
    if (e.target.dataset.dir) {
      if (e.target.dataset.dir === "inc") {
        count += 1;
      } else {
        count -= 1;
      }
    } else {
      count = Number(e.target.value);
    }
  }
</script>

<button data-dir="inc" on:click={incDec}>+</button>
<input type="number" on:change={incDec} value={count} />
<button data-dir="dec" on:click={incDec}>-</button>
<h3>{double}</h3>
