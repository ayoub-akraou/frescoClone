<template>
  <div class="start-cooking__animation">
    <div
      :class="[
        'start-cooking__img1',
        { 'start-cooking__img1-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__img2',
        { 'start-cooking__img2-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__img3',
        { 'start-cooking__img3-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__img4',
        { 'start-cooking__img4-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__light',
        { 'start-cooking__light-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__lighter',
        { 'start-cooking__lighter-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__dark',
        { 'start-cooking__dark-animation': isAnimate },
      ]"
    ></div>
    <div
      :class="[
        'start-cooking__darker',
        { 'start-cooking__darker-animation': isAnimate },
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["isAnimate"],
};
</script>

<style>
.start-cooking__animation div {
  @apply aspect-square rounded-full absolute bg-cover;
}
.start-cooking__img1 {
  @apply bg-[url(../../assets/images/vegetable-1.jpg)] w-[30%] top-0 left-[5%];
}
.start-cooking__img2 {
  @apply bg-[url(../../assets/images/vegetable-2.jpg)] w-[13%] top-[29.5%] left-[9%];
}
.start-cooking__img3 {
  @apply bg-[url(../../assets/images/vegetable-3.jpg)] w-[75%] top-[16%] left-[18%];
}
.start-cooking__img4 {
  @apply bg-[url(../../assets/images/vegetable-4.jpg)] w-[22%] bottom-0 right-0;
}
.start-cooking__light {
  @apply w-[9%] bg-floralWhite top-[25%] left-[2%];
}
.start-cooking__lighter {
  @apply w-[8%] bg-white bottom-[22%] right-[4%];
}
.start-cooking__dark {
  @apply w-[16%] bg-stone-700 top-[2%] left-[34.5%];
}
.start-cooking__darker {
  @apply bg-darkGray w-[9%] bottom-[4%] right-[22%];
}

.start-cooking__img1-animation {
  animation: animate-1 5s ease forwards;
}
.start-cooking__img2-animation {
  animation: animate-2 5s ease forwards;
}
.start-cooking__img3-animation {
  animation: animate-3 5s ease forwards;
}
.start-cooking__img4-animation {
  animation: animate-4 5s ease forwards;
}
.start-cooking__light-animation {
  animation: animate-5 5s ease forwards;
}
.start-cooking__lighter-animation {
  animation: animate-6 5s ease forwards;
}
.start-cooking__dark-animation {
  animation: animate-7 5s ease forwards;
}
.start-cooking__darker-animation {
  animation: animate-8 5s ease forwards;
}

@keyframes animate-1 {
  10%,
  25%,
  85%,
  100% {
    width: 70%;
  }
  35%,
  75% {
    width: 30%;
  }
}
@keyframes animate-2 {
  10%,
  25%,
  85%,
  100% {
    width: 13%;
    top: 68%;
    left: 46%;
  }
  35%,
  50% {
    width: 75%;
    top: 17%;
    left: 17.5%;
  }
  60%,
  75% {
    width: 20%;
    top: 30%;
    left: 11%;
  }
}
@keyframes animate-3 {
  10%,
  25%,
  85%,
  100% {
    width: 27%;
    top: 58%;
    left: 58.5%;
  }
  35%,
  50% {
    width: 18%;
    top: 62%;
    left: 89%;
  }
  60%,
  75% {
    width: 13.5%;
    top: 17.5%;
    left: 33%;
  }
}

@keyframes animate-4 {
  10%,
  50%,
  85%,
  100% {
    width: 22%;
  }
  60%,
  75% {
    width: 75%;
  }
}
@keyframes animate-5 {
  10%,
  25%,
  85%,
  100% {
    top: 70%;
    left: 37%;
  }
  35%,
  50% {
    top: 30%;
    left: 13.5%;
  }
  60%,
  75% {
    top: 27%;
    left: 5%;
  }
}
@keyframes animate-6 {
  10%,
  25%,
  85%,
  100% {
    bottom: 22%;
    right: 7%;
  }
  35%,
  50% {
    bottom: 13%;
    right: -7%;
  }
  60%,
  75% {
    bottom: 59%;
    right: 1%;
  }
}
@keyframes animate-7 {
  10%,
  25%,
  85%,
  100% {
    top: 43.5%;
    left: 71.5%;
  }
  35%,
  50% {
    top: 3%;
    left: 34.5%;
  }
  60%,
  75% {
    top: 2%;
    left: 34.5%;
  }
}
@keyframes animate-8 {
  10%,
  25%,
  85%,
  100% {
    bottom: 6%;
    right: 22%;
  }
  35%,
  50% {
    bottom: 3.5%;
    right: 21.5%;
  }
  60%,
  75% {
    bottom: 11%;
    right: 68.5%;
  }
}
</style>
