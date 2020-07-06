import App from "./App.svelte";
import HTMLViewer from "./comps/HTMLViewer.svelte";
var app = new App({
  target: document.querySelector("#app1"),
});
var app2 = new HTMLViewer({
  target: document.querySelector("#app2"),
});
export default app;
