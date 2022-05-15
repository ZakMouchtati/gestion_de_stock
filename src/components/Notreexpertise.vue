<template>
  <div>
    <div class="title">
      <h2>Notre expertise</h2>
    </div>
    <div class="expertise-conseil">
      <div class="container">
        <h2>Expertise Conseil</h2>
        <detailexpertise
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :content="post.content"
          class="detail-expertise"
        />
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="ExpertiseContentieux">
      <div class="container">
        <h2>Expertise Contentieux</h2>
        <ExpertiseContentieux
          v-for="Expertise in Expertises"
          :key="Expertise.id"
          :titleexp="Expertise.title"
          :contentexp="Expertise.content"
        />
        <div class="clearfix"></div>
      </div>
    </div>
    <Secteursintervention />
  </div>
</template>

<script>
import detailexpertise from "@/components/detailexperties.vue";
import ExpertiseContentieux from "@/components/ExpertiseContentieux.vue";
import Secteursintervention from "@/components/Secteursintervention.vue";
import Object_exp from "@/Object_exp/MOCK_DATA.json";
import Expertises from "@/Object_exp/MOCK_DATA.json";
export default {
  data: function () {
    return {
      posts: Object_exp,
      Expertises: Expertises,
    };
  },
  name: "Notreexpertise",
  components: {
    detailexpertise,
    ExpertiseContentieux,
    Secteursintervention,
  },
};
</script>
<style scoped>
.title {
  padding: 100px 0px;
  text-align: center;
  background-image: url("../assets/expertise-bg-2.jpeg");
  background-size: cover;
  background-position: center;
  margin-bottom: 40px;
}
.title h2 {
  color: #fff;
  font-size: 50px;
  text-shadow: 0em 0.1em 0.1em rgb(0 0 0 / 40%);
}
.expertise-conseil h2,
.ExpertiseContentieux h2 {
  font-size: 40px;
  color: #9a3040;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}
.ExpertiseContentieux {
  background-color: #eee;
  padding-top: 50px;
  padding-bottom: 50px;
}
.clearfix {
  clear: both;
}
</style>
