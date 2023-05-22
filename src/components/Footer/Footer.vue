<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <Logo />
      <ul class="footer__links">
        <li><a class="footer__link" href="#link">Mobile App</a></li>
        <li><a class="footer__link" href="#link">Appliances</a></li>
        <li><a class="footer__link" href="#link">Recipes</a></li>
        <li><a class="footer__link" href="#link">Support</a></li>
      </ul>
      <ul class="footer__links">
        <li><a class="footer__link" href="#link">Appliance Partners</a></li>
        <li><a class="footer__link" href="#link">Get Demo</a></li>
        <li><a class="footer__link" href="#link">About Us</a></li>
        <li><a class="footer__link" href="#link">Careers</a></li>
        <li><a class="footer__link" href="#link">Legal</a></li>
      </ul>
      <ul class="footer__links">
        <li class="footer__micro-title">News</li>
        <li>
          <a class="footer__link" href="#link">Security and smart appliances</a>
        </li>
        <li>
          <a class="footer__link" href="#link"
            >Fresco Raises $20 Million Series B</a
          >
        </li>
        <li><a class="footer__link" href="#link">Drop becomes Fresco</a></li>
      </ul>
      <div class="footer__box">
        <SocialMediaLinks />
        <SubscriptionForm :withLabel="true" styles="text-[calc(.8rem+.5vw)]"/>
        <p class="text-lg font-extralight text-end">This field is required</p>
      </div>
    </div>
    <p class="copy-right text-lg sm:text-xl md:text-2xl font-extralight">
      © copyright 2022
    </p>
  </footer>
</template>

<script>
import Logo from "../global/Logo.vue";
import SocialMediaLinks from "../global/SocialMediaLinks.vue";
import SubscriptionForm from "../global/SubscriptionForm.vue";
export default {
  components: { Logo, SocialMediaLinks, SubscriptionForm },
};
</script>

<style>
.footer {
  @apply bg-darkGray general-x-padding py-[calc(2rem+3vw)] text-floralWhite;
}
.footer__wrapper {
  @apply flex flex-wrap gap-[calc(1rem+2vw)] justify-center items-start mb-6 sm:mb-12 lg:mb-36;
}
.footer__links {
  @apply space-y-6 mx-auto;
}
.footer__link {
  @apply text-[calc(.8rem+.5vw)]  hover:underline;
}
.footer__micro-title {
  @apply text-[calc(.8rem+.5vw)] text-gray-400 font-medium;
}
.footer__box {
  @apply [&_img]:w-[calc(2rem+.8vw)] mx-auto;
}
.social-media-links {
  @apply flex justify-end gap-6 [&>*]:cursor-pointer mb-[calc(1rem+2vw)];
}

/* .footer .form__box {
  @apply flex bg-white overflow-hidden rounded-full pl-6 sm:pl-8 mb-6;
}
.form__label {
  @apply block text-[calc(.8rem+.5vw)] text-floralWhite mb-2 text-right;
}
.footer input {
  @apply outline-none text-darkGray text-[calc(.8rem+.5vw)] font-['Quicksand',sans-serif] font-semibold tracking-wide placeholder:font-medium placeholder:text-gray-600;
}
.footer .form__button {
  @apply bg-black text-white text-[calc(.8rem+.5vw)] px-[calc(.6rem+1vw)] py-2 m-[1.4px] rounded-full capitalize cursor-pointer hover:underline underline-offset-4;
} */
</style>
