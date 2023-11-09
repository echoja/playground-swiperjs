<script lang="ts">
  import { register } from "swiper/element";
  import type { SwiperOptions } from "swiper/types";
  import { getStore } from "./store";

  const store = getStore();
  // swiper parameters

  register();
  let swiperEl: HTMLElement;

  const swiperOptions: SwiperOptions = {
    on: {
      init(swiper) {
        console.log("init!");
        console.log("swiper.slides.length", swiper.slides.length);
        store.length.set(swiper.slides.length);
        store.swiper.set(swiper);
      },
      slideChange(swiper) {
        store.activeIndex.set(swiper.activeIndex);
      },
    },
  };

  $: if (swiperEl) {
    Object.assign(swiperEl, swiperOptions);
    (swiperEl as any).initialize();
  }
</script>

<swiper-container bind:this={swiperEl} init={false}>
  <swiper-slide class="slide">Slide 1</swiper-slide>
  <swiper-slide class="slide">Slide 2</swiper-slide>
  <swiper-slide class="slide">Slide 3</swiper-slide>
</swiper-container>

<style>
  .slide {
    background: #ddd;
    border-radius: 16px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: #000;
    height: 200px;
  }
</style>
