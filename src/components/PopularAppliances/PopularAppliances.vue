<template>
  <section class="popular-appliances">
    <h1 class="title">Popular appliances on Fresco</h1>
    <p class="description">
      Here are just some of the appliances you can connect with on the Fresco
      app from your favorite brands including Instant Brands, Bosch, GE,
      Kenwood, and more.
    </p>
    <div class="wrapper">
      <Appliance
        v-for="(
          { imageSrc, subtitle, title, description }, i
        ) in appliancesData"
        :key="i"
        :imageSrc="imageSrc"
        :subtitle="subtitle"
        :title="title"
        :description="description"
      />
    </div>
  </section>
  <section class="discover-partners">
    <h1 class="discover-partners__title">Discover the cross-brand smart kitchen platform.</h1>
    <Button class="block mx-auto bg-floralWhite text-darkTyrianPurple" text="Partner with Fresco"/>
  </section>
</template>

<script>
import Appliance from "./Appliance.vue";
import Button from "../global/Button.vue";

export default {
  components: { Appliance, Button },
  data() {
    return {
      appliancesData: [
        {
          imageSrc: "appliances-1.webp",
          subtitle: "INSTANT BRANDS",
          title: "Instant Pot Pro Plus",
          description:
            "The beloved Instant Pot, only smarter. Control the pot from the Fresco app, and choose from a library of smart recipes that will guide you through each step.",
        },
        {
          imageSrc: "appliances-2.webp",
          subtitle: "KENWOOD",
          title: "Kenwood Cooking Chef XL",
          description:
            "The all-in-one countertop appliance that can do everything. With the Fresco app, remote control your appliance and enjoy hundreds of connected recipes.",
        },
        {
          imageSrc: "appliances-3.webp",
          subtitle: "GE APPLIANCES",
          title: "GE Wifi connected ovens",
          description:
            "Pre-heat and monitor your cooking remotely. Simply sync your GE wifi-connected oven to the Fresco app and keep track of dinner on the go.",
        },
        {
          imageSrc: "appliances-4.webp",
          subtitle: "BOSCH",
          title: "Bosch ovens with Home Connect",
          description:
            "Control your oven remotely and serve up great results. From setting the perfect temperature to timers, cooking and baking have never been so easy.",
        },
        {
          imageSrc: "appliances-5.webp",
          subtitle: "LG APPLIANCES",
          title: "LG Smart Ovens",
          description:
            "From preheating to setting timers, control key features of your LG smart oven directly from a recipe in the Fresco app.",
        },
        {
          imageSrc: "appliances-6.webp",
          subtitle: "KENWOOD",
          title: "Kenwood CookEasy+",
          description:
            "Connect the all-in-one cooking companion to the Fresco app and enjoy hundreds of step-by-step recipes.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.popular-appliances {
  @apply general-x-padding  general-y-padding bg-darkGray
}
.title {
  @apply title-md text-lightPink text-center
}
.description {
  @apply description-md text-floralWhite text-center font-medium mb-8 xs:mb-16 lg:mb-20
}
.wrapper {
  @apply grid sm:grid-cols-2 xl:grid-cols-3 gap-8 px-4 xs:px-[10vw] sm:p-0 lg:px-[6vw] xl:px-[3vw]
}


.discover-partners {
  @apply bg-primaryTomato general-x-padding general-y-padding
}
.discover-partners__title {
  @apply title-md text-white text-center mb-8 sm:mb-16
}
</style>
