<template>
  <div id="app">
    <HeaderComp />
    <router-view />
    <footerdlf />
    <footer>
      <div class="container">Zakaria Mouchtati © 2021</div>
    </footer>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import footerdlf from "@/components/footerDlf.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    footerdlf,
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  background-color: #9a3040;
  color: #fff !important;
}
footer {
  background-color: RGB(23, 23, 23);
  color: #666;
  padding: 20px;
}
</style>
