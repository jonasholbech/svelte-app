<script>
  import { onMount } from "svelte";

  let canvas;
  let show = false;
  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame;
    let counters = {
      r: {
        value: Math.floor(Math.random() * 256),
        dir: Math.floor(Math.random() * 2)
      },
      g: {
        value: Math.floor(Math.random() * 256),
        dir: Math.floor(Math.random() * 2)
      },
      b: {
        value: Math.floor(Math.random() * 256),
        dir: Math.floor(Math.random() * 2)
      }
    };
    function updateCounters() {
      getNextCounter(counters.r);
      getNextCounter(counters.g);
      getNextCounter(counters.b);
    }
    function getNextCounter(obj) {
      if (obj.dir) {
        obj.value += 4;
        if (obj.value > 255) {
          obj.dir = 0;
        }
      } else {
        obj.value -= 4;
        if (obj.value < 0) {
          obj.dir = 1;
        }
      }
    }
    (function loop() {
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      /*for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const t = window.performance.now();

        const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
        const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      }*/

      /*for(let p = 0; p< imageData.data.length; p+=4){
          const i = p/4;
      }*/
      for (let i = 0; i < imageData.data.length; i += 4) {
        updateCounters();
        imageData.data[i + 0] = counters.r.value;
        imageData.data[i + 1] = counters.g.value;
        imageData.data[i + 2] = counters.b.value;
        imageData.data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    })();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<style>
  canvas {
    width: 200px;
    height: 200px;
    background-color: #666;
    /*droppede svg'en direkte i build for at få det til at virke, der er noget med loaderen her*/
    -webkit-mask: url(svelte-logo-mask.svg) 50% 50% no-repeat;
    mask: url(svelte-logo-mask.svg) 50% 50% no-repeat;
  }
</style>

<canvas bind:this={canvas} width={32} height={32} />
<p>
  The readonly this binding applies to every element (and component) and allows
  you to obtain a reference to rendered elements.
</p>
<p>
  Note that the value of canvas will be undefined until the component has
  mounted, so we put the logic inside the onMount .
</p>
