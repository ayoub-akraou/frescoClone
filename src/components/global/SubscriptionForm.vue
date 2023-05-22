<template>
  <form>
    <label class="subscribe__label" v-if="withLabel"> Subscribe to our newsletter</label>
    <div class="subscribe__box">
      <input class="subscribe__input" type="email" placeholder="Your email address" :class="styles" />
      <button class="subscribe__button" :class="styles" type="submit">Subscribe</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["withLabel","styles"]
};
</script>

<style scoped>
.subscribe__box {
  @apply flex bg-white overflow-hidden rounded-full pl-6 sm:pl-8 mb-6;
}
.subscribe__label {
  @apply block text-floralWhite text-[calc(.8rem+.5vw)] mb-2 text-right;
}
.subscribe__input {
  @apply bg-transparent flex-1 outline-none text-darkGray font-['Quicksand',sans-serif] font-semibold tracking-wide placeholder:font-medium placeholder:text-gray-600;
}
.subscribe__button {
  @apply bg-darkGray text-white px-[calc(.6rem+1vw)] py-2 m-[1.4px] rounded-full capitalize cursor-pointer hover:underline underline-offset-4;
}
</style>
