<template>
  <div class="how-it-works__partners">
    <h3 class="partners__title">
      {{ title }}
    </h3>
    <div class="partners__wrapper">
      <img src="../../assets/images/brand-1.webp" alt="brand logo" />
      <img src="../../assets/images/brand-2.webp" alt="brand logo" />
      <img src="../../assets/images/brand-3.webp" alt="brand logo" />
      <img src="../../assets/images/brand-4.webp" alt="brand logo" />
      <img src="../../assets/images/brand-5.webp" alt="brand logo" />
      <img src="../../assets/images/brand-6.webp" alt="brand logo" />
      <img
        class="col-start-3"
        src="../../assets/images/brand-7.webp"
        alt="brand logo"
      />
      <img src="../../assets/images/brand-8.webp" alt="brand logo" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.partners__title {
  @apply title-md text-tyrianPurple text-center font-medium mb-[calc(2rem+2vw)];
}
.partners__wrapper {
  @apply flex flex-wrap [&_img]:w-1/2 md:[&_img]:w-1/4 lg:[&_img]:w-1/5 justify-center;
}
</style>
