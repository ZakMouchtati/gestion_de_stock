<template>
  <div>
    <CompTrack />
    <Contentieux />
  </div>
</template>
<script>
import CompTrack from "@/components/CompTrack.vue";
import Contentieux from "@/components/Contentieux.vue";
export default {
  name: "TrackRecord",
  components: {
    CompTrack,
    Contentieux,
  },
};
</script>
