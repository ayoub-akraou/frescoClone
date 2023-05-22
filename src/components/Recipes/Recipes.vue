<template>
  <section class="recipes" :class="theme">
    <h1 :class="['recipes__title', title?.classes]">{{ title?.content }}</h1>
    <p class="recipes__subtitle">
      {{ subtitle?.content }}
    </p>
    <article class="recipes__wrapper">
      <Recipe
        v-for="({ classes, content, link }, i) in recipesData"
        :key="i"
        :classes="classes"
        :content="content"
        :link="link"
      />
    </article>
    <Button :class="button?.classes" class="mt-10 md:mt-16" text="More Recipes" />
  </section>
</template>

<script>
import Recipe from "./Recipe.vue";
import Button from "../global/Button.vue";

export default {
  components: { Recipe, Button },
  props: ["theme", "title", "subtitle", "recipesData", "button"],
};
</script>

<style scoped>
.recipes {
  @apply general-x-padding general-y-padding;
}
.recipes__title {
  @apply title-lg font-medium mb-6 after:content-["."] after:text-white;
}
.recipes__subtitle {
  @apply description-sm mb-16 text-floralWhite font-medium;
}
.recipes__wrapper {
  @apply grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-[calc(14vw)] xs:p-0;
}
</style>
