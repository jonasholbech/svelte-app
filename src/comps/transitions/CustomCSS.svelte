<script>
  import { fade } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  let visible = true;

  function spin(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
      }
    };
  }
</script>

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <span>transitions!</span>
  </div>
{/if}

<pre class="manual">
  The function takes two arguments — the node to which the transition is
  applied, and any parameters that were passed in — and returns a transition
  object which can have the following properties: delay — milliseconds before
  the transition begins duration — length of the transition in milliseconds
  easing — a p => t easing function (see the chapter on ) css — a (t, u) => css
  function, where u === 1 - t tick — a (t, u) => ... function that has some
  effect on the node The t value is 0 at the beginning of an intro or the end of
  an outro, and 1 at the end of an intro or beginning of an outro. Most of the
  time you should return the css property and not the tick property, as CSS
  animations run off the main thread to prevent jank where possible. Svelte
  'simulates' the transition and constructs a CSS animation, then lets it run.
</pre>
