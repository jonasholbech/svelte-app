<script>
  async function getDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    if (res.ok && Math.random() > 0.5) {
      return data;
    } else {
      throw new Error("A RANDOM error ocurred");
    }
  }

  let promise = getDog();

  function handleClick() {
    promise = getDog();
  }
</script>

<button on:click={handleClick}>Async</button>
{#await promise}
  <p>...waiting</p>
{:then data}
  <p>The data is {data.message}</p>
{:catch error}
  {console.log(error)}
  <p style="color: red">{error.message}</p>
{/await}
