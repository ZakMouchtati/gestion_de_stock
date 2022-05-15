<template>
  <div class="detail">
    <h5>{{ title }}</h5>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "detailexperites",
  props: ["title", "content"],
};
</script>
<style scoped>
.detail {
  width: 48%;
  float: left;
}
.detail:nth-child(even) {
  margin-right: 4%;
}
.detail h5 {
  color: #333;
  text-align: center;
}
.detail p {
  line-height: 1.9;
  padding-left: 5px;
  padding-right: 5px;
  color: #666;
  text-align: center;
}
.clearfix {
  clear: both;
}
@media (max-width: 768px) {
  .detail {
    width: 100% !important;

    margin-bottom: 20px;
  }
}
</style>
