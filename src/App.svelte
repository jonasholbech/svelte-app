<script>
  import Nested from "./comps/Nested.svelte";
  import HTMLViewer from "./comps/HTMLViewer.svelte";
  import Counter from "./comps/Counter.svelte";
  import ArraysAndObjects from "./comps/ArraysAndObjects.svelte";
  import Conditions from "./comps/Conditions.svelte";
  import Each from "./comps/Each.svelte";
  import Await from "./comps/Await.svelte";
  import Events from "./comps/Events.svelte";
  import EventModifiers from "./comps/EventModifiers.svelte";
  import EventDispatcher from "./comps/EventDispatcher.svelte";
  import InputTextarea from "./comps/InputTextarea.svelte";
  import CheckboxRadio from "./comps/CheckboxRadio.svelte";
  import Select from "./comps/Select.svelte";
  import ContentEditable from "./comps/ContentEditable.svelte";
  import BindingEachBlock from "./comps/BindingEachBlock.svelte";
  import MediaElements from "./comps/MediaElements.svelte";
  import Dimensions from "./comps/Dimensions.svelte";
  import This from "./comps/This.svelte";
  import ComponentBindings from "./comps/ComponentBindings.svelte";
  import OnMount from "./comps/lifecycles/OnMount.svelte";
  import OnDestroy from "./comps/lifecycles/OnDestroy.svelte";
  import BeforeUpdateAfterUpdate from "./comps/lifecycles/BeforeUpdateAfterUpdate.svelte";
  import Tick from "./comps/lifecycles/Tick.svelte";
  import WritableStore from "./comps/stores/writable/App.svelte";
  let name = "world";
  const myObj = {
    name: "an object pased as props",
    status: "great"
  };
</script>

<details>
  <summary>Basic variable</summary>
  <h2>Hello {name}!</h2>
</details>
<details>
  <summary>Nested</summary>
  <Nested {name} />
  <Nested name="Jonas" {myObj} aPropWithDefault="hej mor" />
</details>
<details>
  <summary>HTML Viewer</summary>
  <HTMLViewer />
</details>
<details>
  <summary>Counter</summary>
  <Counter />
</details>
<details>
  <summary>Arrays &amp; Objects</summary>
  <ArraysAndObjects />
</details>
<details>
  <summary>Conditions</summary>
  <Conditions user={{ loggedIn: true }} />
  <Conditions age={10} user={{ loggedIn: false }} />
</details>
<details>
  <summary>Each</summary>
  <Each />
</details>
<details>
  <summary>Await</summary>
  <Await />
</details>
<details>
  <summary>Events</summary>
  <Events />
</details>
<details>
  <summary>Event Modifiers</summary>
  <EventModifiers />
</details>
<details>
  <summary>EventDispatcher</summary>
  <EventDispatcher />
</details>
<details>
  <summary>Bind / Input</summary>
  <InputTextarea />
</details>
<details>
  <summary>Checkbox / Radio</summary>
  <CheckboxRadio />
</details>
<details>
  <summary>Select</summary>
  <Select />
</details>
<details>
  <summary>content editable</summary>
  <ContentEditable />
</details>
<details>
  <summary>Binding, Each block</summary>
  <BindingEachBlock />
</details>
<details>
  <summary>Media Elements</summary>
  <MediaElements />
</details>
<details>
  <summary>Dimensions</summary>
  <Dimensions />
</details>
<details>
  <summary>This (reference)</summary>
  <p>Commented out, animated canvas</p>
  <!--<This />-->
</details>
<details>
  <summary>ComponentBindings</summary>
  <ComponentBindings />
</details>
<details>
  <summary>onMount, lifecycle</summary>
  <OnMount />
</details>
<details>
  <summary>onDestroy, lifecycle</summary>
  <OnDestroy />
</details>
<details>
  <summary>BeforeUpdateAfterUpdate, lifecycle</summary>
  <BeforeUpdateAfterUpdate />
</details>
<details>
  <summary>Tick, lifecycle</summary>
  <Tick />
</details>
<details open>
  <summary>Stores: writable</summary>
  <WritableStore />
</details>
