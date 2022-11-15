<script>
  import Steps from "./Steps.svelte";
  let steps = [];
  const addStep = () => (steps = [...steps, {}]);
</script>

<div>
  <h2>Editor</h2>
  <hr />
  <Steps {steps} />
  <button on:click={addStep}>+</button>
</div>
