<script>
  import marked from "marked";
  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`
    }
  ];

  let selected;

  let answer = "";

  function handleSubmit() {
    const chosen = questions.find(q => q.id === selected);
    alert(`answered question ${chosen.id} (${chosen.text}) with "${answer}"`);
  }
</script>

<style>
  input {
    display: block;
    width: 500px;
    max-width: 100%;
  }
</style>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select
    bind:value={selected}
    on:change={() => (answer = '')}
    on:blur={() => (answer = '')}>
    {#each questions as question}
      <option value={question.id}>{question.text}</option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit">Submit</button>
</form>

<p>selected question {selected ? selected : '[waiting...]'}</p>
<p>
  Because we haven't set an initial value of selected, the binding will set it
  to the default value (the first in the list) automatically. Be careful though
  — until the binding is initialised, selected remains undefined, so we can't
  blindly reference e.g. selected.id in the template.
</p>
<p>The documentation had</p>
<p>
  {@html marked('`<option value={question}>{question.text}</option>`')}
  but question is an object
</p>
<p>
  select multiple is also supported:
  https://svelte.dev/tutorial/multiple-select-bindings
</p>
