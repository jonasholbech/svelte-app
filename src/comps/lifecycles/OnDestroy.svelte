<script>
  import { onInterval } from "./onDestroyUtils.js";

  let seconds = 0;
  onInterval(() => (seconds += 1), 1000);
</script>

<p>
  The page has been open for {seconds} {seconds === 1 ? 'second' : 'seconds'}
</p>
<p>To run code when your component is destroyed, use onDestroy.</p>
<p>
  While it's important to call lifecycle functions during the component's
  initialisation, it doesn't matter where you call them from. So if we wanted,
  we could abstract the interval logic into a helper function in
  onDestroyUtils.js...
</p>
