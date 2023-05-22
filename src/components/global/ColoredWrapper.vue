<template>
  <section><slot></slot></section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  @apply relative overflow-hidden z-10 ;
}
section::before {
  @apply absolute left-0 -translate-x-1/2 w-[160%] xs:w-[120%] sm:w-full aspect-square rounded-full -z-20;
}
section::after{
  @apply absolute right-0 translate-x-1/2 w-[160%] xs:w-[120%] sm:w-full aspect-square rounded-full -z-20;
}
</style>
