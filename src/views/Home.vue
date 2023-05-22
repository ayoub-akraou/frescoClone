<template>
  <Navigation />
  <Header
    title="Now we're cooking"
    description1="It’s easier than ever to cook mouth-watering meals. With Fresco, make
        your favorite recipes smart so that your appliances work with you. All
        you have to do is follow the steps and devour the results."
    classes="text-lightPink"
    backgroundSrc="./src/assets/images/kitchen.webp"
    ><AppStoreLinks
  /></Header>
  <main>
    <Presentation />
    <HowItWorks
      :withButton="true"
      :withDescription="true"
      :HowItWorks="{
        color: 'text-tyrianPurple',
        beforeBackground: 'before:bg-tyrianPurple',
        beforeBottom: 'before:-bottom-[8rem]',
      }"
    >
      <Partners title="Fresco works with the world’s leading appliance brands."
    /></HowItWorks>
    <RecipesHomeVersion />
    <Reviews />
    <QRCode />
  </main>
  <Footer />
</template>

<script>
import Navigation from "../components/Navigation/Navigation.vue";
import Header from "../components/Header/Header.vue";
import Presentation from "../components/Presentation/Presentation.vue";
import HowItWorks from "../components/HowItWorks/HowItWorks.vue";
import Partners from "../components/Partners/Partners.vue";
import RecipesHomeVersion from "../components/Recipes/RecipesHomeVersion.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import QRCode from "../components/QRCode/QRCode.vue";
import Footer from "../components/Footer/Footer.vue";
// ------ global ------
import AppStoreLinks from "../components/global/AppStoreLinks.vue";

export default {
  components: {
    Navigation,
    Header,
    Presentation,
    HowItWorks,
    Partners,
    RecipesHomeVersion,
    Reviews,
    QRCode,
    Footer,
    AppStoreLinks,
  },
};
</script>

<style></style>
