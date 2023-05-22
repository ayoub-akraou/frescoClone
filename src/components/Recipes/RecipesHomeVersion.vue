<template>
  <section class="recipies">
    <h1 class="recipies__title">What to cook first</h1>
    <p class="recipies__description">
      Cook your next meal with Fresco and see how easy it can be to serve your
      favorites.
    </p>
    <article class="recipies__wrapper">
      <Recipe
        v-for="({ classes, content, link }, i) in recipesData"
        :key="i"
        :classes="classes"
        :content="content"
        :link="link"
      />
    </article>
    <Button
      class="bg-tyrianPurple text-floralWhite block mx-auto mt-10 md:mt-16"
      text="More Recipes"
    />
  </section>
</template>

<script>
import Recipe from "./Recipe.vue";
import Button from "../global/Button.vue";

export default {
  components: { Recipe, Button },
  data() {
    return {
      recipesData: [
        {
          content: {
            imageSource: "recipe-1",
            title: "Top Rated on Fresco",
            description: "The best of the best",
          },
          classes: {
            figure: "bg-primaryGreen",
            image: "aspect-square"
          },
          link: "#link",
        },
        {
          content: {
            imageSource: "recipe-2",
            title: "Instant Pot Pro Plus Recipes You'll Love",
            description: "Sync your Instant Pot and get cooking in a flash.",
          },
          classes: {
            figure: "bg-tyrianPurple",
            image: "aspect-square"
          },
          link: "#link",
        },
        {
          content: {
            imageSource: "recipe-3",
            title: "Eat Fresh with Fresco",
            description: "Clean, lean and ready in a cinch.",
          },
          classes: {
            figure: "bg-primaryTomato",
            image: "aspect-square"
          },
          link: "#link",
        },
        {
          content: {
            imageSource: "recipe-4",
            title: "Thermomix Family Favorites",
            description:
              "Delicious, nourishing, and enough to feed the whole family.",
          },
          classes: {
            figure: "bg-primaryYellow",
            image: "aspect-square"
          },
          link: "#link",
        },
        {
          content: {
            imageSource: "recipe-5",
            title: "Air Fryer Recipes You Need to Try",
            description: "Crispy, crunchy and lower in fat.",
          },
          classes: {
            figure: "bg-primaryGreen",
            image: "aspect-square"
          },
          link: "#link",
        },
        {
          content: {
            imageSource: "recipe-2",
            title: "Panasonic 4-in-1 Multi Oven Recipes",
            description: "Tried and tested with your 4-in-1 oven in mind.",
          },
          classes: {
            figure: "bg-primaryOrange",
            image: "aspect-square"
          },
          link: "#link",
        },
      ],
    };
  },
};
</script>

<style scoped>
.recipies {
  @apply general-x-padding general-y-padding bg-darkGray;
}
.recipies__title {
  @apply title-lg font-medium text-lightPink text-center mb-6 after:content-["."] after:text-white;
}
.recipies__description {
  @apply description-lg lg:w-4/5 mb-16 text-floralWhite;
}
.recipies__wrapper {
  @apply grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 px-[calc(14vw)] xs:p-0;
}
</style>
