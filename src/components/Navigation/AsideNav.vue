<template>
  <ul class="aside-nav translate-x-full" role="nav">
    <li class="px-4 pt-3 text-right">
      <img
        class="close-icon w-7 inline cursor-pointer active:scale-90"
        src="../../assets/images/close.svg"
        alt="close icon"
      />
    </li>
    <li
      v-for="({ text, path }, i) in linksData"
      :key="i"
      class="aside-nav__link"
    >
      <router-link :to="path">{{ text }}</router-link>
    </li>
    <li class="aside-nav__button">
      <Button
        class="text-floralWhite bg-tyrianPurple w-full !text-[1.8rem]"
        text="download app"
      />
    </li>
  </ul>
</template>

<script>
import Button from "../global/button.vue";

export default {
  components: { Button },
  props: ["linksData"],
};
</script>

<style>
.aside-nav {
  @apply ml-auto w-10/12 sm:w-8/12 h-screen bg-white flex flex-col [&>:nth-child(2)]:border-t-0 transition-transform duration-300;
}

.aside-nav__link {
  @apply border-t capitalize text-[2rem] xs:text-[2.2rem] font-light p-6 active:underline;
}

.aside-nav__button {
  @apply p-6;
}
</style>
