<template>
  <div class="smart-recipes__animation">
    <div
      :class="[
        'smart-recipes__img1',
        { 'rotate': isAnimate },
      ]"
    >
      <img src="../../assets/images/quarter-plate-1.jpg" alt="quarter plate" />
    </div>
    <div
      :class="[
        'smart-recipes__img2',
        { 'rotate': isAnimate },
      ]"
    >
      <img src="../../assets/images/quarter-plate-2.jpg" alt="quarter plate" />
    </div>
    <div
      :class="[
        'smart-recipes__img3',
        { 'rotate': isAnimate },
      ]"
    >
      <img src="../../assets/images/quarter-plate-3.jpg" alt="quarter plate" />
    </div>
    <div
      :class="[
        'smart-recipes__img4',
        { 'rotate': isAnimate },
      ]"
    >
      <img src="../../assets/images/quarter-plate-4.jpg" alt="quarter plate" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["isAnimate"],
};
</script>

<style>
.smart-recipes__animation {
  @apply grid grid-cols-2 grid-rows-2;
}

.smart-recipes__img1 {
  border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
  overflow: hidden;
}

.smart-recipes__img2 {
  border-radius: 0% 100% 0% 100% / 100% 100% 0% 0%;
  overflow: hidden;
}

.smart-recipes__img3 {
  border-radius: 100% 0% 0% 100% / 0% 100% 0% 100%;
  overflow: hidden;
}

.smart-recipes__img4 {
  border-radius: 0% 100% 100% 0% / 100% 0% 100% 0%;
  overflow: hidden;
}

.rotate {
  animation: rotate 3s forwards;
}

@keyframes rotate {
  33% {
    transform: rotate(90deg);
  }
  66% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
