<script lang="ts">
  import { getContext, onMount } from "svelte";

  let ho = getContext<HTMLElement>("swiper");
  let abc = ho?.nodeName;

  console.log(ho);

  onMount(() => {
    console.log("child onMount", ho);
  });

  function next() {
    ho?.swiper?.slideNext?.();
  }

  // Add your component logic here
</script>

<div>
  {ho?.message}
  <button on:click={next}>sub 다음으로</button>
</div>

<style>
  /* Add your component styles here */
</style>
