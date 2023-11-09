<script lang="ts">
  import { setContext } from "svelte";
  import { register } from "swiper/element";
  import Frame from "./Frame.svelte";
  import Sub from "./Sub.svelte";

  register();
  let ho: HTMLElement;
  const swiperContext = {};

  setContext("swiper", swiperContext);

  const spaceBetween = 10;
  const onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    console.log("onProgress", e);
  };
  const onSlideChange = (e: any) => {
    console.log("onSlideChange", e);
    console.log("onSlideChange", e.detail[0].activeIndex);
  };

  function renderBullet(index: number, className: string) {
    return `<span class="${className}">${index + 1}</span>`;
  }

  $: {
    console.log("ho", ho);
  }

  $: if (ho) {
    swiperContext.swiper = ho.swiper;

    ho.swiper.on("init", (e) => {
      const [swiper] = e.detail;
      console.log(swiper.slides.length);
    });

    ho.swiper.init();
  }

  function next() {
    ho.swiper.slideNext();
  }
</script>

<swiper-container
  bind:this={ho}
  pagination={{
    clickable: true,
    type: "bullets",
    renderBullet,
  }}
  on:swiperprogress={onProgress}
  on:swiperslidechange={onSlideChange}
>
  <swiper-slide class="slide">Slide 1</swiper-slide>
  <swiper-slide class="slide">Slide 2</swiper-slide>
  <swiper-slide class="slide">Slide 3</swiper-slide>
</swiper-container>

<button on:click={next}>다음으로</button>
<Sub />
<Frame message="1">
  <Sub />
  <Frame message="2">
    <Sub />
    <Frame message="3">
      <Sub />
    </Frame>
    <Sub />
  </Frame>
  <Sub />
</Frame>
<Sub />

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
