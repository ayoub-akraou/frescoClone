<template>
  <nav class="navigation" ref="nav">
    <ul class="navigation__links">
      <!----- logo ----->
      <router-link to="/" class="mr-auto cursor-pointer">
        <Logo />
      </router-link>
      <!----- links ----->
      <li
        v-for="({ text, path }, i) in linksData"
        :key="i"
        class="navigation__link"
      >
        <router-link :to="path">{{ text }}</router-link>
      </li>
      <!----- button ----->
      <li class="navigation__button">
        <Button
          ref="button"
          class="bg-floralWhite md:bg-tyrianPurple text-tyrianPurple md:text-white"
          text="download app"
        />
      </li>
      <!----- menu icon ----->
      <MenuIcon @click="openAsideNav" />
    </ul>
  </nav>
  <Overlay ref="overlay" @click="closeAsideNav">
    <!----- aside nav ----->
    <AsideNav :linksData="linksData" ref="asideNav" />
  </Overlay>
</template>

<script>
import Button from "../global/button.vue";
import Logo from "../global/Logo.vue";
import Overlay from "../global/Overlay.vue";
import MenuIcon from "./MenuIcon.vue";
import AsideNav from "./AsideNav.vue";

export default {
  components: { Button, Logo, MenuIcon, AsideNav, Overlay },
  data() {
    return {
      linksData: [
        { text: "home", path: "/" },
        { text: "mobile App", path: "mobile-app" },
        { text: "appliances", path: "appliances" },
        { text: "recipes", path: "recipes" },
      ],
    };
  },
  methods: {
    openAsideNav() {
      this.$refs.overlay.$el.classList.remove("opacity-0", "invisible");
      this.$refs.asideNav.$el.classList.remove("translate-x-full");
      document.documentElement.style.overflow = "hidden";
    },
    closeAsideNav(event) {
      if (
        event.target.classList.contains("close-icon") ||
        event.target.classList.contains("overlay")
      ) {
        this.$refs.asideNav.$el.classList.add("translate-x-full");
        this.$refs.overlay.$el.classList.add("opacity-0", "invisible");
        document.documentElement.style.overflow = "auto";
      }
    },
  },
  mounted() {
    const bodyTop = () => document.body.getBoundingClientRect().top;
    const bodyBottom = () => document.body.getBoundingClientRect().bottom;
    const headerTitleHeight = document
      .querySelector(".header__title")
      .getBoundingClientRect().height;
    let lastTopValue = 0;
    const that = this
    function showHideNav(action) {
      const nav = { show: "remove", hide: "add" };
      that.$refs.nav.classList[nav[action]]("-translate-y-full");
    }
    function showHideBackground(action) {
      const NavBackground = { show: "add", hide: "remove" };
      that.$refs.nav.classList[NavBackground[action]](
        "before:translate-y-full"
      );
    }
    window.addEventListener("scroll", () => {
      const scrollToTop = bodyTop() > lastTopValue;
      const isHalfHeaderVisible = bodyTop() > -headerTitleHeight / 2;
      if (scrollToTop) {
        // on scroll to Top
        lastTopValue = bodyTop();
        showHideNav("show");
        showHideBackground("show");
      } else {
        // on scroll to bottom
        lastTopValue = bodyTop();
        showHideNav("hide");
        showHideBackground("hide");
      }

      // when the header half is visible
      if (isHalfHeaderVisible) {
        showHideNav("show");
        showHideBackground("hide");
        // change the button theme
        this.$refs.button.$el.classList.remove(
          "!bg-floralWhite",
          "!text-tyrianPurple"
          );
        } else {
          // change the button theme to normal
        this.$refs.button.$el.classList.add(
          "!bg-floralWhite",
          "!text-tyrianPurple"
        );
      }
      // when the last sections are visible 
      if (bodyBottom() < 1.5 * window.innerHeight) {
        showHideNav("show");
        showHideBackground("show");
      }
    });
  },
};
</script>

<style>
.navigation {
  @apply z-50 py-6 sm:py-10 px-[calc(1rem+2vw)] whitespace-nowrap fixed -top-1 left-0 right-0 w-screen max-w-[100vw] transition-transform duration-300 before:absolute before:-top-full before:left-0 before:w-full before:h-full before:bg-tyrianPurple before:-z-10 before:transition-transform before:duration-300;
}
.navigation__links {
  @apply flex gap-[calc(.5rem+1vw)] items-center;
}
.navigation__link {
  @apply hidden md:block text-[calc(1rem+.8vw)] text-white font-medium capitalize p-3 cursor-pointer hover:underline underline-offset-2;
}
.navigation__button {
  @apply hidden xs:block  ml-auto lg:ml-[6%];
}
</style>
