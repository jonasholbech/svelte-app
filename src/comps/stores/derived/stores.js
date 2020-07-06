import { readable, derived } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start = new Date();

//TODO: er derived(time, ()=>{}) bare readbale state passed in? det er det vel
export const elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);
