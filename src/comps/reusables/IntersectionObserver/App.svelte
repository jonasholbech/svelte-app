<script>
  import ImageLoader from "./ImageLoader.svelte";
  let data = new Array(100).fill(0);

  console.log(data);
  const base = "https://picsum.photos/seed/";
  const size = "/200/200";
  function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
  }
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0;
    padding: 0;
    gap: 1rem;
  }
  li {
    list-style: none;
    background: #eee;
    width: 200px;
    height: 200px;
  }
</style>

<ul>
  {#each data as q}
    <li>
      <ImageLoader src={base + rand(0, 1000) + size} alt="Our image" />
    </li>
  {/each}
</ul>
