<template>
  <button class="global-btn">
    <a href="#link">{{ text }}</a>
  </button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.global-btn {
  @apply text-[calc(.8rem+.8vw)] px-[calc(.6rem+1.2vw)] py-3 sm:py-4 rounded-full capitalize cursor-pointer hover:underline underline-offset-4 transition;
}
</style>
