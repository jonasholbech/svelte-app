<script>
  import EventDispatcherMiddleMan from "./EventDispatcherMiddleMan.svelte";
  let messageFromBelow;
  function handleMessage(event) {
    messageFromBelow = event.detail.text + " " + event.detail.status;
  }
</script>

<h3>Event Dispacther</h3>
<p>Seems to work like oberserver pattern</p>
<p>on:message, set the handler for when a child calls</p>
<p>
  Message from the kids:
  <strong>{messageFromBelow}</strong>
</p>
<EventDispatcherMiddleMan name="Jonas" on:mymessage={handleMessage} />
<EventDispatcherMiddleMan name="Peter" on:mymessage={handleMessage} />
<EventDispatcherMiddleMan name="Dannie" on:mymessage={handleMessage} />
