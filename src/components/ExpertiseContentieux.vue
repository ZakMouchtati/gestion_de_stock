<template>
  <div class="Contentieux">
    <h5>{{ titleexp }}</h5>
    <p>
      {{ contentexp }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ExpertiseContentieux",
  props: ["titleexp", "contentexp"],
};
</script>
<style scoped>
.Contentieux {
  width: 48%;
  float: left;
  text-align: center;
}
.Contentieux:nth-child(even) {
  margin-right: 4%;
}
h5 {
  color: #333;
}
.Contentieux p {
  color: #666;
}
@media (max-width: 768px) {
  .Contentieux {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
