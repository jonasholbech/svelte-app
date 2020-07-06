<script>
  export let name;
  export let aPropWithDefault = "default";
  export let myObj;
</script>

<style>
  h2 {
    color: hotpink;
  }
</style>

<article class="person">
  <h2>
    Hi {name} your second prop is {aPropWithDefault} the object is: {JSON.stringify(myObj)}
  </h2>
  <button>Click me</button>
</article>
