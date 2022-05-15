<template>
  <div class="my-team">
    <div class="title">
      <h2>Notre équipe</h2>
    </div>
    <div class="avocats-associes">
      <div class="container">
        <h2>Avocats associés</h2>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Rachid Diouri</h4>
          <span>Chairman </span>
          <p>Avocat agrée près la Cour de Cassation</p>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Mehdi Diouri</h4>
          <span> Managing Partner </span>
          <p>Avocat</p>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Malika Smires</h4>
          <span>Avocate associée </span>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Hicham Oujamaa</h4>
          <span>Avocat associée </span>
          <p>Avocat agrée près la Cour de Cassation</p>
        </div>
        <div class="clearfix"></div>
        <h2>Avocats collaborateurs seniors</h2>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Bouchaib Guisser</h4>
          <span>Avocat agrée près la cour de Cassation </span>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Abdelkarim Bahli</h4>
          <span>Avocat collaborateur </span>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Khalid Khadroub</h4>
          <span>Chairman </span>
          <p>Avocat collaborateur</p>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Hind Hasbi</h4>
          <span>Avocate collaborateur </span>
        </div>
        <div class="clearfix"></div>
        <h2>Avocats collaborateurs</h2>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Ahlame Fissaoui</h4>
          <span>Avocate collaborateur </span>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Me Noureddine Segam</h4>
          <span>Avocate collaborateur </span>
        </div>
        <h2>Back-Office</h2>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Nadia Diouri</h4>
          <span>Office Manager </span>
        </div>
        <div class="personnel">
          <img src="../assets/homme-profil-anonyme.jpg" alt="" srcset="" />
          <h4>Salima Ridani</h4>
          <span>Responsable administratif et financier </span>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "team",
};
</script>
<style scoped>
.title {
  padding: 100px 0px;
  background-image: url("../assets/reunion-header.jpeg");
  background-size: cover;
  background-position: center center;
}
.title h2 {
  font-size: 40px;
  color: rgba(255, 255, 255, 0.774);
  text-align: center;
}
.avocats-associes h2 {
  font-size: 40px;
  color: #9a3040;
  text-align: center;
  padding: 30px 0px;
}
.personnel {
  width: 40%;
  float: left;
}
.personnel:nth-child(odd) {
  margin-left: 15%;
}
.personnel:nth-child(even) {
  margin-left: 5%;
}
.personnel h4 {
  font-weight: 600;
  padding-left: 20px;
}
.personnel span {
  color: #666;
  font-size: 12px;
  padding-left: 10px;
}
.personnel p {
  font-size: 14px;
  padding-left: 10px;
}
.clearfix {
  clear: both;
}
.my-team {
  padding-bottom: 40px;
}
@media (max-width: 768px) {
  .personnel {
    float: none;
  }
  .personnel:nth-child(odd) {
    margin-left: 0%;
    margin: 20px auto;
  }
  .personnel:nth-child(even) {
    margin-left: 0%;
  }
}
</style>
