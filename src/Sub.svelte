<script lang="ts">
  import { getStore } from "./store";

  const { swiper } = getStore();

  function next() {
    $swiper.slideNext();
  }

  // Add your component logic here
</script>

<div>
  <button on:click={next}>sub 다음으로</button>
</div>

<style>
  button {
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  }
  /* Add your component styles here */
</style>
