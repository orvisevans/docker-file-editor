<script>
  import StepsItem from "./StepsItem.svelte";
  export let steps;
</script>

<ul>
  {#each steps as step}
    <StepsItem {step} />
  {/each}
</ul>
