<template>
  <section class="subscribe" :class="themes[theme]?.background">
    <h1 class="title" :class="themes[theme]?.title">
      Subscribe to our newsletter.
    </h1>
    <p class="description" :class="themes[theme]?.description">
      Never miss a comforting chili or decadent dessert.
    </p>
    <SubscriptionForm
      :theme="theme"
      class="w-4/5 xs:w-3/5 md:w-2/5 mx-auto"
      styles="text-[calc(.8rem+.8vw)] py-3 md:py-4"
    />
  </section>
</template>

<script>
import SubscriptionForm from "../global/SubscriptionForm.vue";
export default {
  components: { SubscriptionForm },
  props: ["theme"],
  data() {
    return {
      themes: {
        dark: {
          background: "bg-darkGray",
          title: "text-lightPink",
          description: "text-white",
        },
        light: {
          background: "bg-white",
          title: "text-darkTyrianPurple",
          description: "text-black",
        },
      },
    };
  },
};
</script>

<style scoped>
.subscribe {
  @apply general-x-padding general-y-padding;
}
.title {
  @apply title-md text-center mb-6;
}
.description {
  @apply description-sm text-center font-semibold mb-8 md:mb-12;
}
</style>
