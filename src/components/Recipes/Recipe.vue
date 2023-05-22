<template>
  <figure class="recipe opacity-0" :class="classes.figure" ref="recipe">
    <a :href="link" class="recipe__image"
      ><img
        :class="classes.image"
        :src="`./src/assets/images/${content.imageSource}.webp`"
        alt="recipe"
    /></a>
    <div class="recipe-data">
      <h3 class="recipe__title -translate-y-6 opacity-0" :class="classes.title" ref="title">
        {{ content.title }}
      </h3>
      <figcaption
        class="recipe__description -translate-y-6 opacity-0"
        ref="description"
      >
        {{ content.description }}
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  props: ["classes", "content", "link"],
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            this.$refs.title.classList.remove("opacity-0", "-translate-y-6");
            this.$refs.description.classList.remove(
              "opacity-0",
              "-translate-y-6"
            );
          } else {
            entry.target.classList.add("opacity-0");
            this.$refs.title.classList.add("opacity-0", "-translate-y-6");
            this.$refs.description.classList.add("opacity-0", "-translate-y-6");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(this.$refs.recipe);
  },
};
</script>

<style>
.recipe {
  @apply relative rounded-2xl overflow-hidden [&:hover_.recipe\_\_title]:underline [&:hover_img]:scale-110 [&_img]:transition-transform [&_img]:duration-700 before:absolute before:bottom-0 before:left-0 before:w-full before:h-2/3 before:bg-gradient-to-t before:from-black/95 before:to-transparent before:z-10 transition-opacity duration-500;
}
.recipe__image {
  @apply block [&>img]:object-cover [&>img]:min-w-full rounded-tr-[32%] overflow-hidden z-0;
}
.recipe-data {
  @apply absolute bottom-0 left-0 px-4 pb-6 text-floralWhite  z-10;
}
.recipe__title {
  @apply text-[calc(.8rem+1vw)] mb-2 font-medium transition duration-700 delay-200;
}
.recipe__description {
  @apply description-sm transition font-medium duration-700 delay-300;
}
</style>
