<template>
  <footer>
    <div class="container">
      <div class="footer-desc" style="margin-left: 0px">
        <img src="@/assets/logo-dlf-footer.png" alt="" />
      </div>
      <div class="footer-desc">
        <span>Liens rapide</span>
        <ul>
          <router-link to="/" tag="li">Accueil</router-link>
          <router-link to="/cabinet" tag="li">LE CABINET</router-link>
          <router-link to="/about" tag="li">EXPERTISE</router-link>
          <router-link to="/about" tag="li">ÉQUIPE</router-link>
          <router-link to="/about" tag="li">Track record</router-link>
          <router-link to="/about" tag="li">NOUS JOINDRE</router-link>
        </ul>
      </div>

      <div class="footer-desc">
        <span>À propos </span>
        <p>
          Le Cabinet DIOURI LAW FIRM SCP fondé en 2007, par Maître Mehdi Diouri
          est spécialisé en droit des affaires, et à vocation internationale.
          Nous intervenons tant en matière de conseils que de contentieux pour
          une clientèle marocaine et étrangère.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footerDlf",
};
</script>
<style scoped>
footer {
  background-color: #222;
  padding: 50px 0px;
  overflow: hidden;
}
.footer-desc {
  width: 30%;
  float: left;
}
span {
  color: #9a3040;
  font-size: 18px;
  margin-left: 45px;
}
ul {
  list-style: none;
  margin-left: 40px;
}
li {
  color: #fff;
  font-size: 14px;
  margin: 10px auto;
  background-color: transparent;
}
li:hover {
  cursor: pointer;
}
p {
  color: #fff;
  margin: 10px auto;
}
@media (max-width: 991px) {
  .footer-desc {
    width: 50%;
    margin: 20px auto;
  }
  .footer-desc:last-of-type {
    width: 100%;
    margin: 30px auto;
  }
}
@media (max-width: 768px) {
  .footer-desc {
    width: 100%;
    float: none;
    text-align: center;
  }
}
</style>
