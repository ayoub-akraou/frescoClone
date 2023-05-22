<template>
  <Navigation />
  <Header
    title="Appliances"
    description1="The world’s leading appliance brands partner with Fresco, making it easier than ever to cook delicious food using the appliances you have in your kitchen."
    description2="Simply download the app, connect your smart appliances, and we’ll find the perfect recipes to work with them."
    backgroundSrc="./src/assets/images/family.jpg"
    classes="after:text-lightYellow"
  />
  <YellowWrapper class="before:-bottom-[20%]">
    <Partners title="Appliance brands Fresco connects with" />
  </YellowWrapper>
  <PopularAppliances />
  <QRCode />
  <Footer />
</template>

<script>
import Navigation from "../components/Navigation/Navigation.vue";
import Header from "../components/Header/Header.vue";
import Partners from "../components/Partners/Partners.vue";
import PopularAppliances from "../components/PopularAppliances/PopularAppliances.vue";
import QRCode from "../components/QRCode/QRCode.vue";
import Footer from "../components/Footer/Footer.vue";
import YellowWrapper from "../components/global/YellowWrapper.vue";
export default {
  components: {
    Navigation,
    Header,
    YellowWrapper,
    Partners,
    PopularAppliances,
    QRCode,
    Footer,
  },
};
</script>

<style></style>
