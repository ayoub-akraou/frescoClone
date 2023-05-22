<template>
  <ColoredWrapper ref="featuresSection">
    <div class="title" :class="switchPositions ? 'Right' : 'Left'">
      {{ title }}
    </div>
    <div class="description" :class="switchPositions ? 'Left' : 'Right'">
      {{ description }}
    </div>
  </ColoredWrapper>
</template>

<script>
import ColoredWrapper from "../global/ColoredWrapper.vue";

export default {
  components: {
    ColoredWrapper,
  },
  props: ["title", "description", "switchPositions"],
  
};
</script>

<style scoped>
.title {
  @apply title-sm absolute top-0  aspect-square p-6 sm:p-12 rounded-full flex items-center shadow-xl z-40;
}
.description {
  @apply description-sm font-semibold absolute bottom-0  bg-lightYellow max-w-fit w-4/5 xs:w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 text-center aspect-square p-6 sm:p-12 rounded-full flex items-center shadow-xl z-40;
}
/* Left capital to prevent left conflict because left is a reserved keyword */
.Left {
  @apply left-0 md:left-[10%] xl:left-[15%];
}
.Right {
  @apply right-0 md:right-[10%] xl:right-[15%];
}
</style>
