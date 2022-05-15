<template>
  <div class="Contentieux">
    <div class="container">
      <div class="title">
        <h2>Contentieux</h2>
      </div>
      <div class="Contentieux-general">
        <div class="Contentieux-choix">
          <h5>Contentieux commercial</h5>
          <ul>
            <li>Litige entre associés : 15 MMUSD</li>
            <li>Recours contre des organes d’administration : 10 MMUSD</li>
            <li>Défense d’un concessionnaire industriel : 50 MMUSD</li>
            <li>Recours contre un gestionnaire délégué : 15 MMUSD</li>
            <li>Annulation judiciaire d’une fusion/acquisition : 9MM USD</li>
          </ul>
        </div>
        <div class="Contentieux-choix">
          <h5>Contentieux bancaire</h5>
          <ul>
            <li>Défense d’emprunteurs : 170 MMUSDD</li>
            <li>Recours contre les emprunteurs: 5MMUSD/an</li>
            >
          </ul>
        </div>
        <div class="Contentieux-choix">
          <h5>Contentieux des assurances</h5>
          <ul>
            <li>Recours en assurances risques divers : 6 MMUSD/an</li>
            <li>Recours en recouvrement primes : 1MMUSD/an</li>
          </ul>
        </div>
      </div>
      <div class="Contentieux-general">
        <div class="Contentieux-choix">
          <h5>Contentieux administratif</h5>
          <ul>
            <li>Recours contre des collectivités locales : 60 MMUSD</li>
            <li>
              Recours contres des décisions administratives abusives : 2 MMUSD
            </li>
            <li>Annulations d’appels d’offres : 10 MMUSD</li>
          </ul>
        </div>
        <div class="Contentieux-choix">
          <h5>Contentieux maritime</h5>
          <ul>
            <li>Recours contre les affréteurs : 6 MMUSD</li>
            <li>
              Recours contre les transporteurs et saisies de navires : 5MMUSD/an
            </li>
          </ul>
        </div>
        <div class="Contentieux-choix">
          <h5>Contentieux des affaires et arbitrage</h5>
          <ul>
            <li>
              Arbitrage ad hoc en résiliation de contrat de gestion hôtelière :
              6 MMUSD
            </li>
            <li>
              Arbitrage international en cession de droits numériques : 8 MMUSD
            </li>
          </ul>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contentieux",
};
</script>
<style scoped>
.Contentieux {
  background-color: #eee;
  padding: 40px 0px;
}
.Contentieux h2 {
  color: #9a3040;
  font-size: 40px;
  text-align: center;
}
.Contentieux-general {
  width: 50%;
  float: left;
  margin-top: 70px;
}
.Contentieux-choix h5 {
  text-align: center;
  font-weight: 700;
  padding: 20px 0px;
}
.clearfix {
  clear: both;
}
@media (max-width: 768px) {
  .Contentieux-general {
    width: 100%;
    float: none;
  }
}
</style>
