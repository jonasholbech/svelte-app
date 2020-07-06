<script>
  let w;
  let h;
  let ow, oh;
  let size = 42;
  let text = "edit me";
</script>

<style>
  input {
    display: block;
  }
  div {
    display: inline-block;
    padding: 1rem;
    margin: 1rem;
    border: 10px solid #000;
  }
  span {
    word-break: break-all;
  }
</style>

<input type="range" bind:value={size} />
<input bind:value={text} />

<p>client size: {w}px x {h}px</p>
<p>offset size: {ow}px x {oh}px</p>
<div
  bind:clientWidth={w}
  bind:clientHeight={h}
  bind:offsetWidth={ow}
  bind:offsetHeight={oh}>
  <span style="font-size: {size}px">{text}</span>
</div>
<p>
  Every block-level element has clientWidth, clientHeight, offsetWidth and
  offsetHeight bindings:
</p>
<p>
  These bindings are readonly — changing the values of w and h won't have any
  effect.
</p>

<p>
  There is some overhead involved, so it's not recommended to use this for large
  numbers of elements.
</p>

<p>
  display: inline elements cannot be measured with this approach; nor can
  elements that can't contain other elements (such as canvas). In these cases
  you will need to measure a wrapper element instead.
</p>
