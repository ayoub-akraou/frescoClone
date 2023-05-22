<template>
  <section><slot></slot></section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
  @apply general-x-padding bg-white general-y-padding relative before:absolute before:left-0 before:w-full before:aspect-square before:bg-floralWhite z-0 before:-z-10 before:rounded-full overflow-hidden
}
</style>