<template>
  <figure class="appliance" ref="appliance">
    <img
      class="appliance__image opacity-0 translate-y-8 transition duration-500 delay-200"
      :src="`./src/assets/images/${imageSrc}`"
      alt="appliance"
    />
    <div class="appliance__data">
      <span
        class="appliance__subtitle opacity-0 translate-y-8 transition duration-500 delay-200"
        >{{ subtitle }}</span
      >
      <figcaption
        class="appliance__title opacity-0 translate-y-8 transition duration-500 delay-200"
      >
        {{ title }}
      </figcaption>
      <p
        class="appliance__description opacity-0 translate-y-8 transition duration-500 delay-200"
      >
        {{ description }}
      </p>
      <Button
        text="Learn More"
        class="text-floralWhite bg-tyrianPurple !mt-6 opacity-0 translate-y-8 !duration-500 delay-200"
      />
    </div>
  </figure>
</template>

<script>
import Button from "../global/Button.vue";
export default {
  components: { Button },
  props: ["imageSrc", "subtitle", "title", "description"],
  mounted() {
    const elements = document.querySelectorAll(
      ".appliance__image, .appliance__data > *"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0  }
    );
    elements.forEach((element) => observer.observe(element));
  },
};
</script>

<style>
.appliance {
  @apply rounded-2xl overflow-hidden flex flex-col;
}
.appliance__image {
  @apply w-full object-cover;
}
.appliance__data {
  @apply bg-white space-y-2 p-8 xs:p-10 flex-1;
}
.appliance__subtitle {
  @apply text-[1.2rem] text-gray-600 font-medium;
}
.appliance__title {
  @apply title-sm text-tyrianPurple;
}
.appliance__description {
  @apply description-md text-darkGray font-medium;
}
</style>
