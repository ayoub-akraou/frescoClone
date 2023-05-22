<template>
  <section class="features" ref="features">
    <div class="features__data">
      <h1 class="features__title">Features</h1>
      <p class="features__description">
        Here are some of the smart features <br />
        that will make it easier than ever to <br />
        cook food full-of-flavor.
      </p>
    </div>
    <div class="mobile">
      <div class="mobile__border">
        <img src="../../assets/images/mobile.webp" alt="" />
        <img
          ref="mobileScreen"
          class="mobile__screen"
          src="../../assets/images/features.jpg"
          alt="app screenshot"
        />
      </div>
    </div>
    <FeaturesSection
      data-image="features-1.png"
      title="Appliance Control"
      description="Simply sync the smart appliances you have in your kitchen, and control them remotely from the Fresco app."
      class="h-screen lg:h-[120vh] bg-lightPink before:bottom-0 before:bg-tyrianPurple before:translate-y-1/2 after:hidden [&_.title]:bg-tyrianPurple [&_.title]:text-lightPink"
    />
    <FeaturesSection
      data-image="features-2.png"
      title="Recipe resizing"
      description="Waste not, want not. Adjust the serving size up or down to suit your needs without altering the results."
      :switchPositions="true"
      class="h-screen lg:h-[120vh] bg-lightOrange before:bg-primaryOrange before:top-0 before:-translate-y-1/2 after:bottom-0 after:bg-primaryOrange after:translate-y-1/2 [&_.title]:bg-primaryOrange [&_.title]:text-darkYellow"
    />
    <FeaturesSection
      data-image="features-3.png"
      title="Ingredient Substitutions"
      description="Don't pass a recipe by because you're missing an ingredient. Do a custom rebuild by substituting with whatever you have to hand, and watch your recipe adjust instantly."
      class="h-screen lg:h-[120vh] bg-lightYellow after:bg-primaryYellow after:-translate-y-1/2 before:hidden [&_.title]:bg-primaryYellow [&_.title]:text-darkYellow"
    />
    <FeaturesSection
      data-image="features-4.jpg"
      title="Recipes from the Web"
      description="Bring in recipes from your favorite bloggers or search through the thousands we already have in the app."
      :switchPositions="true"
      class="h-screen lg:h-[120vh] bg-lightGreen before:bottom-0 before:bg-primaryGreen before:translate-y-1/2 after:hidden [&_.title]:bg-primaryGreen [&_.title]:text-darkGray"
    />
    <FeaturesSection
      data-image="features-5.png"
      title="Guided Cooking"
      description="Our step-by-step guide is always prepping for what’s ahead, automatically offering tips, and activating steps letting you stay in the moment."
      class="h-screen lg:h-[120vh] bg-lightPink before:top-0 before:bg-primaryTomato before:-translate-y-1/2 after:bottom-0 after:bg-primaryTomato after:translate-y-1/2 [&_.title]:bg-lightPink [&_.title]:text-darkTyrianPurple"
    />
    <FeaturesSection
      data-image="features-6.png"
      title="Organized Shopping"
      description="Create a shopping list that includes all the ingredients and amounts you need for your customized recipe with one tap."
      :switchPositions="true"
      class="h-screen lg:h-[120vh] bg-floralWhite after:top-0 after:bg-lightYellow after:-translate-y-1/2 before:hidden [&_.title]:bg-darkGray [&_.title]:text-floralWhite"
    />
  </section>
</template>

<script>
import FeaturesSection from "./FeaturesSection.vue";
export default {
  components: { FeaturesSection },
  mounted() {
    const featuresTop = () => this.$refs.features.getBoundingClientRect().top;
    const featuresSections = document.querySelectorAll(".features > section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (featuresTop() > -window.innerHeight / 2)
            this.$refs.mobileScreen.src = `./src/assets/images/features.jpg`;
          if (entry.isIntersecting) {
            const src = entry.target.getAttribute("data-image");
            this.$refs.mobileScreen.src = `./src/assets/images/${src}`;
          }
        });
      },
      { threshold: 0.2 }
    );
    featuresSections.forEach((el) => observer.observe(el));
    this.$refs.mobileScreen.addEventListener("load", (event) => {
      this.$refs.mobileScreen.classList.add("animate");
      setTimeout(() => {
        this.$refs.mobileScreen.classList.remove("animate");
      }, 1000);
    });
  },
};
</script>

<style>
.features {
  @apply relative;
}
.features__data {
  @apply block xl:inline-block px-6 lg:pl-[calc(4rem+4vw)] bg-white translate-y-1/2;
}
.features__title {
  @apply title-lg text-center xl:text-left text-primaryGreen mb-6;
}
.features__description {
  @apply description-md text-center xl:text-left font-medium mb-8 md:mb-12;
}
br {
  @apply hidden xl:block;
}
.mobile {
  @apply static sm:sticky transform-none sm:-translate-x-1/2 mx-auto block sm:inline-block w-3/5 xs:w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6 left-1/2 top-0 py-24 lg:py-36 z-20 align-middle;
}
.mobile__border {
  @apply relative rounded-[4rem] xs:rounded-[5rem] sm:rounded-[4rem] overflow-hidden; 
}
.mobile__screen {
  @apply absolute top-4 left-5 w-[calc(100%-2.5rem)] object-cover -z-10;
}
.animate {
  animation: zero-to-one .75s forwards;
}
@keyframes zero-to-one {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
