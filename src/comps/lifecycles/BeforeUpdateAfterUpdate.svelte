<script>
  import Eliza from "elizabot";
  import { beforeUpdate, afterUpdate } from "svelte";

  let div;
  let autoscroll;

  beforeUpdate(() => {
    autoscroll =
      div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });

  const eliza = new Eliza();

  let comments = [{ author: "eliza", text: eliza.getInitial() }];

  function handleKeydown(event) {
    if (event.key === "Enter") {
      const text = event.target.value;
      if (!text) return;

      comments = comments.concat({
        author: "user",
        text
      });

      event.target.value = "";

      const reply = eliza.transform(text);

      setTimeout(() => {
        comments = comments.concat({
          author: "eliza",
          text: "...",
          placeholder: true
        });

        setTimeout(() => {
          comments = comments
            .filter(comment => !comment.placeholder)
            .concat({
              author: "eliza",
              text: reply
            });
        }, 500 + Math.random() * 500);
      }, 200 + Math.random() * 200);
    }
  }
</script>

<style>
  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 320px;
  }

  .scrollable {
    flex: 1 1 auto;
    border-top: 1px solid #eee;
    margin: 0 0 0.5em 0;
    overflow-y: auto;
  }

  article {
    margin: 0.5em 0;
  }

  .user {
    text-align: right;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
  }

  .eliza span {
    background-color: #eee;
    border-radius: 1em 1em 1em 0;
  }

  .user span {
    background-color: #0074d9;
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }
</style>

<div class="chat">
  <h1>Eliza</h1>

  <div class="scrollable" bind:this={div}>
    {#each comments as comment}
      <article class={comment.author}>
        <span>{comment.text}</span>
      </article>
    {/each}
  </div>

  <input on:keydown={handleKeydown} />
</div>
<p>
  The beforeUpdate function schedules work to happen immediately before the DOM
  has been updated. afterUpdate is its counterpart, used for running code once
  the DOM is in sync with your data.
</p>
<p>
  Together, they're useful for doing things imperatively that are difficult to
  achieve in a purely state-driven way, like updating the scroll position of an
  element.
</p>
<p>
  Note that beforeUpdate will first run before the component has mounted, so we
  need to check for the existence of div before reading its properties.
</p>
<p>TODO: here and other places navigator offline fetch local json</p>
