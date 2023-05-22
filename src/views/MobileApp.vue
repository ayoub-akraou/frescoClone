<template>
  <Navigation />
  <Header
    title="Mobile App"
    description1="Introducing your new personal sous chef, here to help you try new recipes or serve up your favorites. Download the app today and experience the magic of cooking with Fresco.."
    backgroundSrc="./src/assets/images/vegetables.webp"
    classes="before:backdrop-blur-sm after:text-primaryGreen"
    ><AppStoreLinks
  /></Header>
  <HowItWorks
    :HowItWorks="{
      color: 'text-primaryGreen',
      beforeBackground: 'before:bg-primaryGreen',
      beforeBottom: 'before:bottom-[45%]'
    }"
  />
  <Features />
   <Reviews />
   <QRCode />
   <Footer />
</template>

<script>
import Navigation from "../components/Navigation/Navigation.vue";
import Header from "../components/Header/Header.vue";
import HowItWorks from "../components/HowItWorks/HowItWorks.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import QRCode from "../components/QRCode/QRCode.vue";
import Footer from "../components/Footer/Footer.vue";
import Features from "../components/Features/Features.vue";

// ----- global -----
import AppStoreLinks from "../components/global/AppStoreLinks.vue";

export default {
  components: {
    Navigation,
    Header,
    HowItWorks,
    Features,
    AppStoreLinks,
    Reviews,
    QRCode,
    Footer
  },
};
</script>

<style></style>
