<template>
  <ColoredWrapper :class="classes.section" ref="section">
    <div class="box lg:w-1/2 flex-1" ref="boxContent">
      <h1 :class="[classes.title, 'opacity-0', '-translate-y-20']" ref="title">
        {{ content.title }}
      </h1>
      <p
        :class="[classes.description, 'opacity-0', '-translate-y-20']"
        ref="description"
      >
        {{ content.description }}
      </p>
      <Button
        :class="[
          classes.button,
          'bg-white',
          'opacity-0',
          '!duration-1000',
          'delay-100',
        ]"
        :text="content.button"
        ref="Button"
      />
    </div>
    <slot></slot>
  </ColoredWrapper>
</template>

<script>
import Button from "../global/Button.vue";
import ColoredWrapper from "../global/ColoredWrapper.vue";

export default {
  components: { Button, ColoredWrapper },
  props: ["content", "classes"],
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.$refs.title.classList.remove("opacity-0", "-translate-y-20");
          this.$refs.description.classList.remove(
            "opacity-0",
            "-translate-y-20"
          );
          this.$refs.Button.$el.classList.remove("opacity-0");
        } else {
          this.$refs.title.classList.add("opacity-0", "-translate-y-20");
          this.$refs.description.classList.add("opacity-0", "-translate-y-20");
          this.$refs.Button.$el.classList.add("opacity-0");
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(this.$refs.boxContent);
  },
};
</script>

<style>
.presentation > section {
  @apply general-x-padding py-[calc(4rem+10vw)] flex gap-[calc(10vw)] flex-col md:flex-row md:justify-center items-center;
}
</style>
