<script>
  let m = {
    x: 0,
    y: 0
  };

  function handleMousemove(e) {
    m.x = e.clientX;
    m.y = e.clientY;
  }
</script>

<style>
  div {
    width: 200px;
    height: 200px;
    background: hotpink;
  }
</style>

<div on:mousemove={handleMousemove}>Position {m.x} x {m.y}</div>
<h3>Inline event</h3>
<p>Quotes are optional but helpfull for syntax highlighting in some env</p>
<div on:mousemove={e => (m = { x: e.clientX, y: e.clientY })}>
  Position {m.x} x {m.y}
</div>
