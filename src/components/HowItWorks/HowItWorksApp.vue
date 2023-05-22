<template>
  <div class="how-it-works__app">
    <div
      v-for="({ imageSource, title, description }, i) in appData"
      :key="i"
      class="flex-1"
      ref="app-box"
    >
      <img
        :src="imageSource"
        alt="mobile app screenshot"
        class="opacity-0 -translate-y-20"
        ref="images"
      />
      <div
        class="app__box transition duration-1000 delay-500 -translate-y-20 opacity-0"
      >
        <h3
          :class="[
            'app__title',
            'app__title--' + ++i,
            `before:content-['${i + 1}']`,
            `${HowItWorks.beforeBackground}`,
            `${HowItWorks.color}`,
          ]"
          ref="titles"
        >
          {{ title }}
        </h3>
        <p class="app__description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["HowItWorks"],
  data() {
    return {
      mounted() {
        console.log("==>", HowItWorks);
      },
      appData: [
        {
          imageSource: ".././src/assets/images/app-1.webp",
          title: "Pick a recipe.",
          description:
            "Choose a delicious recipe from your favorite blogger or website within the app.",
        },
        {
          imageSource: "./src/assets/images/app-2.webp",
          title: "Make it yours.",
          description:
            "Web recipes are converted into our smart recipe format, making it effortless to cook at home.",
        },
        {
          imageSource: "./src/assets/images/app-3.webp",
          title: "Cook it up.",
          description:
            "We send the right instructions to your appliance at the right time so all you have to do is follow the steps and enjoy.",
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [...entry.target.children].forEach((child) =>
              child.classList.remove("opacity-0", "-translate-y-20")
            );
          } else {
            [...entry.target.children].forEach((child) =>
              child.classList.add("opacity-0", "-translate-y-20")
            );
          }
        });
      },
      { threshold: 0.5 }
    );
    this.$refs["app-box"].forEach((el) => {
      observer.observe(el);
    });
  },
};
</script>

<style>
.how-it-works__app {
  @apply md:flex gap-[calc(2rem+5vw)] mb-[calc(4rem+4vw)] [&>*]:flex-1;
}
.how-it-works__app img {
  @apply w-3/5 xs:w-1/2 md:w-auto block mx-auto transition duration-1000;
}
.app__title {
  @apply justify-center md:justify-start text-[calc(1.5rem+1vw)] mb-4 flex items-center gap-2 before:text-white before:text-[calc(1rem+.3vw)] before:font-medium before:w-[calc(2rem+1vw)] before:align-text-bottom before:flex before:justify-center before:items-center before:aspect-square before:rounded-full;
}
.app__description {
  @apply text-center md:text-left description-md font-medium text-darkGray;
}
.app__title--1::before {
  content: "1";
}
.app__title--2::before {
  content: "2";
}
.app__title--3::before {
  content: "3";
}
</style>
