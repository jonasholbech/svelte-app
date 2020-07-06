<script>
  export let user;
  export let age = 42;
</script>

<section>
  {#if user.loggedIn}
    <button>Log Out</button>
  {:else}
    <button>Log In</button>
  {/if}
  {#if !user.loggedIn}
    <a href="#">Sign up</a>
  {/if}

  {#if age < 18}
    <p>You are a child</p>
  {:else if age < 65}
    <p>You are an adult</p>
  {:else}
    <p>You are old</p>
  {/if}
</section>
