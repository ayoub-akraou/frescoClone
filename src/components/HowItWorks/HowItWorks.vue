<template>
  <YellowWrapper class="how-it-works" :class="HowItWorks.beforeBottom">
    <h1 class="how-it-works__title" :class="HowItWorks.color">
      How does it work?
    </h1>
    <p class="how-it-works__description" v-if="withDescription">
      Whether it’s a quick weeknight dinner or a slow cook sensation, Fresco
      makes home cooking so easy you’ll want to do it every day.
    </p>
    <HowItWorksApp :HowItWorks="HowItWorks"  />
    <slot></slot>
    <Button
      v-if="withButton"
      class="bg-tyrianPurple text-floralWhite mx-auto block mt-4 sm:mt-8"
      text="Partner With Fresco"
    />
  </YellowWrapper>
</template>

<script>
import HowItWorksApp from "./HowItWorksApp.vue";
import Partners from "../Partners/Partners.vue";
import YellowWrapper from "../global/YellowWrapper.vue";
import Button from "../global/Button.vue";

export default {
  props: ["withDescription", "HowItWorks", "withButton"],
  components: { HowItWorksApp, Partners, Button, YellowWrapper },
};
</script>

<style>
.how-it-works__title {
  @apply title-lg font-medium text-center mb-6;
}
.how-it-works__description {
  @apply description-lg px-8 mb-12 overflow-hidden;
}
</style>
