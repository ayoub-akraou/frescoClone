<template>
  <section class="presentation">
    <PresentationSection
      :content="startCooking.content"
      :classes="startCooking.classes"
    >
      <StartCookingAnimation
        :isAnimate="isAnimate.StartCookingAnimation"
        data-animation="StartCookingAnimation"
      />
    </PresentationSection>
    <PresentationSection
      :content="smartRecipes.content"
      :classes="smartRecipes.classes"
    >
      <SmartRecipesAnimation
        :isAnimate="isAnimate.SmartRecipesAnimation"
        data-animation="SmartRecipesAnimation"
      />
    </PresentationSection>
    <PresentationSection
      :content="favoriteCookbook.content"
      :classes="favoriteCookbook.classes"
    >
      <FavoriteCookbookAnimation
        :isAnimate="isAnimate.FavoriteCookbookAnimation"
        data-animation="FavoriteCookbookAnimation"
      />
    </PresentationSection>
  </section>
</template>

<script>
import PresentationSection from "./PresentationSection.vue";
import StartCookingAnimation from "./StartCookingAnimation.vue";
import SmartRecipesAnimation from "./SmartRecipesAnimation.vue";
import FavoriteCookbookAnimation from "./FavoriteCookbookAnimation.vue";

export default {
  components: {
    PresentationSection,
    StartCookingAnimation,
    SmartRecipesAnimation,
    FavoriteCookbookAnimation,
  },
  data() {
    return {
      startCooking: {
        content: {
          title: "Start cooking in a flash",
          description:
            "Whether you’re a new cook or have been cooking for years, we’ll guide you through every recipe. We’re always two steps ahead so that all you have to do is focus on that delicious dish.",
          button: "Learn More",
        },
        classes: {
          section: "presentation__start-cooking",
          title: "presentation__title",
          description: "presentation__description",
          button: "text-primaryGreen,",
        },
      },
      smartRecipes: {
        content: {
          title: "Smart recipes for smart appliances",
          description:
            "Tell us what smart appliances you have in your kitchen and we’ll find the perfect recipes for them. We’ll even set the correct times, temperatures, and settings so you can focus on the food.",
          button: "Download App",
        },
        classes: {
          section: "presentation__smart-recipes",
          title: "presentation__title",
          description: "presentation__description",
          button: "text-primaryOrange",
        },
      },
      favoriteCookbook: {
        content: {
          title: "Make the internet your favorite cookbook",
          description:
            "We can take recipes from your favorite websites and give you smart step-by-step instructions. Making a cheesecake for your big celebration? Pasta from your favorite celeb chef? We can do it all, and now, so can you.",
          button: "View Recipes",
        },
        classes: {
          section: "presentation__favorite-cookbook",
          title: "presentation__title",
          description: "presentation__description",
          button: "text-primaryYellow",
        },
      },
      isAnimate: {
        StartCookingAnimation: false,
        SmartRecipesAnimation: false,
        FavoriteCookbookAnimation: false,
      },
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dataAnimation = entry.target.getAttribute("data-animation");
          if (entry.isIntersecting) this.isAnimate[dataAnimation] = true;
          else this.isAnimate[dataAnimation] = false;
        });
      },
      { rootMargin: "0% 0% -30% 0%" }
    );
    const animationSections = document.querySelectorAll(
      "section > [class$='animation']"
    );
    animationSections.forEach((el) => observer.observe(el));
  },
};
</script>

<style>
/**************  start cooking  section  **************/

.presentation__start-cooking {
  @apply bg-lightGreen text-teal-900 before:hidden after:bottom-0 after:translate-y-1/2 after:bg-primaryGreen;
}
.presentation__title {
  @apply text-[calc(2.5rem+2.2vw)] font-medium leading-tight mb-6 md:mb-8 lg:mb-10 after:content-["."] after:text-floralWhite transition duration-1000;
}
.presentation__description {
  @apply description-md font-semibold mb-4 sm:mb-6 transition duration-1000 before:hidden;
}

/*** global animation styles ***/

.start-cooking__animation,
.smart-recipes__animation,
.favorite-cookbook__animation {
  @apply relative w-[90vw] xs:w-[75vw] sm:w-[60vw] md:max-w-[30vw]  flex-1  aspect-square;
}

/**************  smart recipes section  **************/

.presentation__smart-recipes {
  @apply md:!flex-row-reverse bg-lightOrange text-orange-900 before:bottom-0 before:translate-y-1/2 before:bg-primaryOrange after:top-0 after:-translate-y-1/2 after:bg-primaryOrange;
}
.presentation__smart-recipes .button {
  @apply bg-white text-primaryOrange;
}

/**************  favorite cookbook section  **************/

.presentation__favorite-cookbook {
  @apply bg-lightYellow text-yellow-800 before:top-0 before:-translate-y-1/2 before:bg-primaryYellow after:hidden;
}
.presentation__favorite-cookbook .button {
  @apply bg-white text-yellow-600;
}
.favorite-cookbook__logo {
  @apply p-[calc(2rem+1.5vw)] bg-primaryYellow;
}
.favorite-cookbook__logo img {
  @apply aspect-square;
}
</style>
