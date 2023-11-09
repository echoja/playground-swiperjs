<script lang="ts">
  import { setContext } from "svelte";
  import { register } from "swiper/element";
  import Frame from "./Frame.svelte";
  import Sub from "./Sub.svelte";
  import SwiperContainer from "./SwiperContainer.svelte";
  import SwiperPagination from "./SwiperPagination.svelte";
  import { createStore } from "./store";

  register();

  const { swiper } = setContext("store", createStore());

  function next() {
    $swiper.slideNext();
  }
</script>

<button on:click={next}>다음으로</button>

<Sub />
<br />
<SwiperContainer />
<br />
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

<SwiperPagination />
