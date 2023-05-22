<template>
  <section class="qr-code" ref="QRCode">
    <div class="qr-code__wrapper">
      <div class="qr-code__QR">
        <img src="../../assets/images/qr-code.webp" alt="qr code" />
      </div>
      <div class="qr-code__content">
        <div class="qr-code__header">
          <div class="qr-code__logo opacity-0" ref="logo">
            <img src="../../assets/images/logo-2.png" alt="website logo" />
          </div>
          <div class="box">
            <h3 class="qr-code__title">Fresco mobile app</h3>
            <p class="qr-code__subtitle">
              Delicious meals are just a few steps away.
            </p>
          </div>
        </div>
        <p class="qr-code__description">
          Get the free app on your phone to discover new recipes for your
          appliances.
        </p>
      </div>
    </div>
    <AppStoreLinks class="mt-16 lg:hidden" />
  </section>
</template>

<script>
import AppStoreLinks from "../global/AppStoreLinks.vue";
export default {
  components: { AppStoreLinks },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        this.$refs.logo.classList.remove("opacity-0")
      } else {
        this.$refs.logo.classList.add("opacity-0")
      }
    }, {threshold: .5})
    observer.observe(this.$refs.QRCode)
  }

};
</script>

<style>
.qr-code {
  @apply general-x-padding general-y-padding bg-darkTyrianPurple;
}
.qr-code__wrapper {
  @apply px-[5vw] flex items-center justify-center gap-[calc(3rem+5vw)];
}
.qr-code__QR {
  @apply hidden lg:block max-w-[22rem] grow;
}
.qr-code__content {
  @apply block;
}
.qr-code__header {
  @apply flex flex-col lg:flex-row items-center justify-center gap-12 mb-10;
}
.qr-code__logo {
  @apply [&_img]:w-24 [&_img]:min-w-[5rem] [&_img]:aspect-square [&_img]:object-contain p-5  rounded-2xl bg-tyrianPurple transition-opacity duration-1000;
}
.qr-code__title {
  @apply title-md font-medium text-lightPink leading-none text-center mb-4 lg:mb-0 flex-nowrap;
}
.qr-code__subtitle {
  @apply description-sm font-medium text-floralWhite text-center;
}
.qr-code__description {
  @apply text-[calc(1.2rem+1vw)] text-floralWhite font-["Quicksand",sans-serif] font-medium text-center;
}
</style>
