<script lang="ts">
  export let message = "";

  // const swiper = setContext("swiper", {});
  // swiper.message = message;

  // function addNumber() {
  //   swiper.message += "::";
  // }

  // Add your component logic here
</script>

<div class="frame">
  <slot />

  <!-- <button class="add-number" on:click={addNumber}>추가링</button> -->
</div>

<style>
  .frame {
    border: 1px solid #ddd;
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  }
</style>
