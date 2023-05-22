<template>
  <header class="header">
    <h1
      ref="title"
      class="header__title"
      :class="classes?.title"
      :style="{ backgroundImage: `url(${backgroundSrc})` }"
    >
    <div class="">{{ title }}</div>
    
  </h1>
  <div class="header__descriptions">
    <p class="header__description">
      {{ description1 }}
    </p>
    <p class="header__description" :v-if="description2">
      {{ description2 }}
    </p>
    <slot></slot>
  </div>
  </header>
</template>

<script>
export default {
  props: ["title", "description1", "description2", "backgroundSrc", "classes"],
  mounted() {
    const navigation = document.querySelector(".navigation");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navigation.classList.remove(
            "before:translate-y-full",
            "-translate-y-full",
            "before:transition-transform",
            "before:duration-300"
          );
        } else
          navigation.classList.add(
            "before:translate-y-full",
            "-translate-y-full",
            "before:transition-transform",
            "before:duration-300"
          );
      },
      { threshold: 0.5 }
    );
    // observer.observe(this.$refs.title);
  },
};
</script>

<style>
.header__title {
  @apply flex items-center justify-center bg-cover h-[72vh] bg-center general-x-padding text-floralWhite font-medium tracking-tighter text-[clamp(6rem,1rem+8vw,14rem)] leading-tight m-auto isolate relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/60 before:to-black/20 before:-z-10 text-center;
}
.header__title::after {
  @apply content-["."];
}
.header__descriptions {
  @apply general-x-padding py-[calc(2.5rem+6vw)] bg-floralWhite
}
.header__description {
  @apply description-lg text-darkGray mb-12;
}
</style>
