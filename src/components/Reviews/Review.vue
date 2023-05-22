<template>
  <div
    class="reviews__review translate-y-16 opacity-0"
    :class="classes.review"
    ref="reviews"
  >
    <div class="review__stars" ref="stars">
      <img
       
        class="review__star transition duration-500 opacity-0 -translate-y-8"
        width="16px"
        height="16px"
        src="../../assets/images/star.svg"
        alt="star"
      />
      <img
       
        class="review__star transition duration-500 opacity-0 -translate-y-8 delay-100"
        width="16px"
        height="16px"
        src="../../assets/images/star.svg"
        alt="star"
      />
      <img
       
        class="review__star transition duration-500 opacity-0 -translate-y-8 delay-200"
        width="16px"
        height="16px"
        src="../../assets/images/star.svg"
        alt="star"
      />
      <img
       
        class="review__star transition duration-500 opacity-0 -translate-y-8 delay-300"
        width="16px"
        height="16px"
        src="../../assets/images/star.svg"
        alt="star"
      />
      <img
       
        class="review__star transition duration-500 opacity-0 -translate-y-8 delay-[400ms]"
        width="16px"
        height="16px"
        src="../../assets/images/star.svg"
        alt="star"
      />
    </div>
    <h3 class="review__title -translate-y-6 opacity-0" ref="title">
      {{ content.title }}
    </h3>
    <p class="review__description -translate-y-6 opacity-0" ref="description">
      {{ content.description }}
    </p>
    <p class="review__reviewer -translate-y-6 opacity-0" ref="reviewer">
      {{ content.reviewer }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["content", "classes"],
  mounted() {
    // console.log();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-16");
            this.$refs.title.classList.remove("opacity-0", "-translate-y-6");
            this.$refs.description.classList.remove(
              "opacity-0",
              "-translate-y-6"
            );
            this.$refs.reviewer.classList.remove("opacity-0", "-translate-y-6");
          [...this.$refs.stars.children].forEach(star => star.classList.remove("opacity-0", '-translate-y-8'))
        } else {
          entry.target.classList.add("opacity-0");
          this.$refs.title.classList.add("opacity-0", "-translate-y-6");
          this.$refs.description.classList.add("opacity-0", "-translate-y-6");
          this.$refs.reviewer.classList.add("opacity-0", "-translate-y-6");
          [...this.$refs.stars.children].forEach(star => star.classList.add("opacity-0", '-translate-y-8'))
          }
        });
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(this.$refs.reviews)
    // Array(this.$refs.reviews).forEach((review) => observer.observe(review));
  },
};
</script>

<style>
.reviews__review {
  @apply p-[calc(1rem+2.2vw)]  pb-[calc(2rem+3vw)] rounded-2xl transition duration-500;
}
.review__stars  {
  @apply flex mb-4 sm:mb-8;
}
.review__star {
  @apply text-red-500 w-6 sm:w-8 aspect-square flex-shrink-0;
}
.review__title {
  @apply text-[calc(1.5rem+.4vw)] mb-2 font-medium text-yellow-100 transition delay-200 duration-500;
}
.review__description {
  @apply description-sm font-semibold text-floralWhite xs:leading-loose sm:leading-relaxed mb-2 sm:mb-4 transition delay-300 duration-500;
}
.review__reviewer {
  @apply text-[calc(.8rem+.5vw)] font-["Quicksand",sans-serif] font-bold text-floralWhite transition delay-500 duration-500;
}
</style>
