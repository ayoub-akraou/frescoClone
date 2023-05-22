<template>
    <a :href="link">
      <img
        class="w-[calc(6rem+6.5vw)] block"
        src="../../assets/images/logo-1.svg"
        alt="main logo"
      />
    </a>
</template>

<script>
export default {
  props: ["link"]
};
</script>

<style></style>
