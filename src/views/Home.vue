<template>
  <div class="home">
    <Carousel />
    <descbureau />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import descbureau from "@/components/descSite.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    descbureau,
  },
};
</script>
