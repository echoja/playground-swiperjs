<script lang="ts">
  import { getStore } from "./store";

  const { activeIndex, length, swiper } = getStore();

  function onBulletClick(index: number) {
    $swiper.slideTo(index);
  }
</script>

<div class="container">
  {#each Array.from({ length: $length }) as _, index}
    <button
      class="swiper-pagination-bullet"
      class:active={$activeIndex === index}
      on:click={() => onBulletClick(index)}
    />
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
  }

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #ddd;
    margin: 8px;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  .swiper-pagination-bullet.active {
    background: #000;
  }
</style>
