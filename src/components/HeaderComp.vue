<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo-dlf-2.png" alt="" /><i
          @click="Clickme"
          class="fas fa-align-justify icon-nav"
        ></i>
      </div>
      <div class="clearfix"></div>

      <div id="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/cabinet">LE CABINET</router-link>
        <router-link to="/expertise">EXPERTISE</router-link>
        <router-link to="/equipe">ÉQUIPE</router-link>
        <router-link to="/TrackRecord">Track record</router-link>
        <router-link to="/Contactez">NOUS JOINDRE</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComp",
  methods: {
    Clickme: function () {
      let navbar = document.getElementById("nav");
      navbar.classList.toggle("active");
      console.log("Ok For toggle class");
    },
  },
};
</script>
<style scoped>
.header {
  background-color: #eee;
  position: relative;
}
.header .logo {
  width: 20%;
  margin: 0px auto;
}
.header .logo img {
  width: 100%;
}
.header #nav {
  width: 80%;
  margin: 30px auto 0px;
  display: block;
}
.header #nav a {
  width: calc(100% / 6);
  display: inline-block;
  color: #9a3040;
  padding: 10px 0px;
  text-align: center;
  text-decoration: none;
}
.header #nav a:hover {
  background-color: #9a3040;
  color: #fff;
}
.icon-nav {
  float: right;
  width: 10%;
  margin-top: -35px;
  display: none;
  margin: 18px auto;
}
@media (max-width: 991px) {
  .icon-nav {
    display: block;
  }
  .header .logo {
    width: 100%;
    margin: 0px auto;
    float: left;
  }
  .header .logo img {
    width: 45%;
  }
  .header #nav a {
    display: block;
    width: 100%;
    text-align: center;
  }
  .active {
    display: none !important;
  }
}
.clearfix {
  clear: both;
}
</style>
