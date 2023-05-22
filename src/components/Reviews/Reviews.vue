<template>
  <section class="reviews">
    <h1 class="reviews__title">Fresco app reviews</h1>
    <p class="reviews__description">
      Some love from the people that matter most–our home cooks.
    </p>
    <article class="reviews__wrapper">
      <Review v-for="{classes, content}, i in reviewsData" :key="i" :classes="classes" :content="content"/>    </article>
  </section>
</template>

<script>
import Review from "./Review.vue";
export default {
  components: { Review },
  data() {
    return {
      reviewsData: [
        {
          classes: {
            review: "bg-darkYellow",
          },
          content: {
            title: "Best app for my appliances",
            description:
              "With all the appliances I have in my kitchen, this app has all the recipes I and my family need. I use it for Instant Pot dinners, air fryer snacks, and Thermomix quick breakfasts and lunches.",
            reviewer: "ola z pola, iOS",
          },
        },
        {
          classes: {
            review: "bg-tyrianPurple",
          },
          content: {
            title: "Super app–so easy to use & contains tonnes of recipes",
            description: "Really enjoying this app and getting even more use during lockdown! I find it really helpful and intuitive and the range of recipes is fantastic. Especially useful for Thermomix users.",
            reviewer: "JessBer11, iOS",
          },
        },
        {
          classes: {
            review: "bg-primaryGreen",
          },
          content: {
            title: "Easiest to follow recipe app",
            description: "The best guided-cooking app you can find out there! I am using it with my beloved Thermomix, it is just magical.",
            reviewer: "Wan Luo Thu, iOS",
          },
        },
        {
          classes: {
            review: "bg-primaryTomato",
          },
          content: {
            title: "So user friendly!",
            description: "I love using this app. It's so user-friendly and I feel like it is teaching me to be a better cook! The recipes are inspiring and the app is sleekly designed! The support is second to none.",
            reviewer: "DRam79, iOS",
          },
        },
        {
          classes: {
            review: "bg-primaryOrange",
          },
          content: {
            title: "Love this App.",
            description: "I have a Thermomix and I especially love the recipes in the Fresco app. There are so many choices and I really like the recipes by Tenina. The step-by-step instructions are super helpful. 5-star",
            reviewer: "Mayday6, iOS",
          },
        },
        {
          classes: {
            review: "bg-darkYellow",
          },
          content: {
            title: "A must for Instant Pot users.",
            description: "Great selection of recipes with lovely photographs and step-by-step methods. Really tight integration with specific kitchen appliances too. A must if you have an Instant Pot or a smart oven.",
            reviewer: "Dean, Android",
          },
        },
      ],
    };
  },
};
</script>

<style>
.reviews {
  @apply general-x-padding general-y-padding bg-floralWhite;
}
.reviews__title {
  @apply title-lg tracking-tighter font-medium text-tyrianPurple text-center mb-6 after:content-["."] after:text-lightPink;
}
.reviews__description {
  @apply description-lg lg:w-4/5 mb-16 text-darkGray;
}
.reviews__wrapper {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5vw] xs:px-[calc(10vw)] md:px-[5vw] lg:px-0;
}
</style>
