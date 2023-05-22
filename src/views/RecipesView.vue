<template>
  <Navigation />
  <Header
    title="Recipes"
    description1="Make cooking at home easy, effortless
  and fun with Fresco. Just tell us what appliances you have, and we’ll find the
  perfect recipes for them."
    classes="text-lightPink"
    backgroundSrc="./src/assets/images/children.jpg"
  />
  <main>
    <Recipes
      v-for="({ theme, title, subtitle, button, recipesData }, i) in Recipes"
      :key="i"
      :theme="theme"
      :title="title"
      :subtitle="subtitle"
      :button="button"
      :recipesData="recipesData"
    />
    <Subscribe theme="dark"/>
    <QRCode />
  </main>
  <Footer />
</template>

<script>
import Navigation from "../components/Navigation/Navigation.vue";
import Header from "../components/Header/Header.vue";
import QRCode from "../components/QRCode/QRCode.vue";
import Footer from "../components/Footer/Footer.vue";
import Recipes from "../components/Recipes/Recipes.vue";
import Subscribe from "../components/Subscribe/Subscribe.vue";
// ------ global ------
import AppStoreLinks from "../components/global/AppStoreLinks.vue";

export default {
  components: {
    Navigation,
    Header,
    Recipes,
    Subscribe,
    QRCode,
    Footer,
    AppStoreLinks,
  },
  data() {
    return {
      Recipes: [
        {
          theme: "bg-darkYellow",
          title: {
            classes: "text-primaryYellow",
            content: "Eat Fresh with Fresco",
          },
          subtitle: { content: "Clean, lean, and ready in a cinch." },
          button: { classes: "bg-primaryYellow text-darkYellow block mx-auto md:mx-0" },
          recipesData: [
            {
              content: {
                imageSource: "recipe-yellow-1",
                title: "Poke Bowl",
                description: "Feasting at Home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-2",
                title: "Low-Carb Blueberry Smoothie",
                description: "Simply So Healthy",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-3",
                title: "Vegan Glow Bowl",
                description: "Feasting at home ",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-4",
                title: "Crab Louie Lettuce Wraps",
                description: "Feasting at Home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-5",
                title: "Bali Bowls With Peanut Tofu",
                description: "Feasting at home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-6",
                title: "Greek Souvlaki Bowl With Cauliflower Rice",
                description: "Feasting at home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-7",
                title: "Healthy Vegan Collard Green Wraps",
                description: "Feasting at home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-yellow-8",
                title: "Smoked Salmon, Avocado and Fennel Salad",
                description: "Feasting at Home",
              },
              classes: {
                figure: "bg-primaryYellow",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
          ],
        },
        {
          theme: "bg-tyrianPurple",
          title: {
            classes: "text-lightPink",
            content: "Panasonic 4-in-1 Recipes",
          },
          subtitle: {
            content:
              "Tried, tested, and made just for your Pansonic multi-oven.",
          },
          button: { classes: "bg-lightPink text-darkTyrianPurple block mx-auto md:mx-0" },
          recipesData: [
            {
              content: {
                imageSource: "recipe-purple-1",
                title: "Five Minute Brownies",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-2",
                title: "Falafel",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-3",
                title: "Balsamic Honey Beetroot With Hazelnuts and Feta",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-4",
                title: "Sweet Potato and Tofu Green Curry",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-5",
                title: "Cauliflower Cheese",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-6",
                title: "Garlic Crumb Cod",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-7",
                title: "Miso Peanut Microwave Ramen",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-purple-8",
                title: "Creamy Mustard Chicken",
                description: "Chloe Harris",
              },
              classes: {
                figure: "bg-lightPink",
                title: "text-lightPink",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
          ],
        },
        {
          theme: "bg-yellow-900",
          title: {
            classes: "text-primaryOrange",
            content: "Air Fryer Recipes You Need to Try",
          },
          subtitle: { content: "Crunchy, crispy, and lower in fat." },
          button: { classes: "bg-lightOrange text-yellow-900 block mx-auto md:mx-0" },
          recipesData: [
            {
              content: {
                imageSource: "recipe-orange-1",
                title: "Air Fryer Soy Ginger Shisito Peppers",
                description: "allrecipes.com",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-2",
                title: "Air Fryer Korean Pork Lettuce Wraps",
                description: "yummly.com",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-3",
                title: "Air Fryer Chicken Tenders",
                description: "Fresco",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-4",
                title: "Air Fryer Kale Chips",
                description: "Fresco",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-5",
                title: "Air Fryer Buffalo Cauliflower",
                description: "liveeatlearn.com",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-6",
                title: "Pork Belly Tacos",
                description: "Fresco",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-7",
                title: "Easy 15 Minute Air Fryer Zucchini Fries",
                description: "Fresco",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-orange-8",
                title: "Air Fryer Brussels Sprouts",
                description: "Allrecipes.com",
              },
              classes: {
                figure: "bg-primaryOrange",
                title: "text-lightYellow",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
          ],
        },
        {
          theme: "bg-[rgb(38,56,43)]",
          title: {
            classes: "text-primaryGreen",
            content: "Thermomix Family Favorites",
          },
          subtitle: {
            content:
              "Delicious, nourishing, and enough to feed the whole family.",
          },
          button: { classes: "bg-lightGreen block mx-auto md:mx-0" },
          recipesData: [
            {
              content: {
                imageSource: "recipe-green-1",
                title: "Chunky Bolognese Sauce",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-2",
                title: "Pad Thai",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-3",
                title: "Lemon Chicken",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-4",
                title: "Easy Basic Pizza",
                description: "sophiaskitchen.blog",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-5",
                title: "Cauliflower Cheese Soup",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-6",
                title: "Crispy Buffalo Chicken Wings",
                description: "bakesmileplay.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-7",
                title: "Simple Hummus",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
            {
              content: {
                imageSource: "recipe-green-8",
                title: "Vegetarian Enchiladas with Black Beans",
                description: "tenina.com",
              },
              classes: {
                figure: "bg-primaryGreen",
                title: "text-lightGreen",
                image: "aspect-[2/3] lg:aspect-[8/11]",
              },
              link: "#link",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
