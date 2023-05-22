<template>
  <div class="favorite-cookbook__animation">
    <div class="favorite-cookbook__img1">
      <img src="../../assets/images/plate-1.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img2': isAnimate }">
      <img src="../../assets/images/plate-2.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img3': isAnimate }">
      <img src="../../assets/images/plate-3.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img4': isAnimate }">
      <img src="../../assets/images/plate-4.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img5': isAnimate }">
      <img src="../../assets/images/plate-5.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img6': isAnimate }">
      <img src="../../assets/images/plate-6.jpg" alt=" plate" />
    </div>
    <div :class="{ 'favorite-cookbook__img7': isAnimate }">
      <img src="../../assets/images/plate-7.jpg" alt=" plate" />
    </div>
    <div :class="['favorite-cookbook__logo', { 'favorite-cookbook__logo--animate': isAnimate }]">
      <img src="../../assets/images/logo-2.png" alt=" plate" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["isAnimate"]
};
</script>

<style>
.favorite-cookbook__animation {
  @apply grid grid-cols-3 grid-rows-3 [&>*]:overflow-hidden [&>*]:aspect-square [&>*]:rounded-full;
}
/* .favorite-cookbook__img1 {
}
.favorite-cookbook__img2 {
}
.favorite-cookbook__img3 {
}
.favorite-cookbook__img4 {
}
.favorite-cookbook__img5 {
}
.favorite-cookbook__img6 {
}
.favorite-cookbook__img7 {
} 
.favorite-cookbook__logo--animate {
}
*/
</style>
