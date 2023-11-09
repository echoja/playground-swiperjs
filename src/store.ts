import { getContext, setContext } from "svelte";
import { writable } from "svelte/store";
import Swiper from "swiper";

export function createStore() {
  return {
    activeIndex: writable(0),
    length: writable(0),
    swiper: writable(new Swiper(".nothing", { init: false })),
  };
}

export function setStoreContext() {
  return setContext("store", createStore());
}

export function getStore(): ReturnType<typeof createStore> {
  return getContext("store");
}
