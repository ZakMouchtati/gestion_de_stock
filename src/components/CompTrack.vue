<template>
  <div>
    <div class="title">
      <div class="container"><h2>Track Record</h2></div>
    </div>
    <div class="container"><h2 class="conseil-title">Conseil</h2></div>
    <div class="container">
      <div class="content-conseil">
        <div class="Conseil">
          <h5>CORPORATE : M&A, Private Equity, LBO-MBO</h5>
          <ul>
            <li>Acquisition dans l’agro-industrie : 15 MMUSD</li>
            <li>Acquisition dans l’industrie pharmaceutique : 10 MMUSD</li>
            <li>Acquisition dans le transport : 20 MMUSD</li>
            <li>Conseil d’un groupement de transport urbain : 50 MMUSD</li>
            <li>Acquisition dans le digital : 8 MMUSD</li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>Droit minier et énergie</h5>
          <ul>
            <li>Conseil en développement d’un projet minier : 34 MMUSD</li>
            <li>Acquisition d’un projet minier : 15 MMUSD</li>
            <li>Conseil en levée de fonds pour le processing : 25 MMUSD</li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>Droit administratif et marchés publics</h5>
          <ul>
            <li>
              Conseil d’un groupement de gestion déléguée de transport urbain
            </li>
            <li>
              Conseil pour la mise en place d’une unité de traitement des
              déchets en PPP : 50 MMUSD
            </li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>Droit social</h5>
          <ul>
            <li>
              Elaboration de manuels de procédures pour des multinationales
            </li>
            <li>
              Participation à des stratégies de restructuration et de plans
              sociaux pour des multinationales : 14 MMUSD
            </li>
          </ul>
        </div>
      </div>
      <div class="content-conseil">
        <div class="Conseil">
          <h5>Droit bancaire et financement</h5>
          <ul>
            <li>Conseil d’un groupement dans la santé : 9MMUSD</li>
            <li>Acquisition dans l’éducation : 10 MMUSD</li>
            <li>Restructuration de dette : 100 MMUSD</li>
            <li>Restructuration de dette : 100 MMUSD</li>
            <li>Conseil en financement d’acquisition : 15MMUSD</li>
            <li>Recapitalisation : 9MMUSD</li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>Droit commercial</h5>
          <ul>
            <li>Mise en place de réseaux de franchise et de distribution</li>
            <li>Elaboration de contrats de gestion hôtelière</li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>
            Droit des technologies de l’information, de la communication et des
            médias
          </h5>
          <ul>
            <li>Conseil en acquisition de droits de distribution : 6MMUSD</li>
            <li>
              Mise en place d’outils innovants dans l’industrie
              artistiqueConseil dans la mise en place de réseaux WiFi publics :
              18 MMUSD
            </li>
          </ul>
        </div>

        <div class="Conseil">
          <h5>Droit de la propriété industrielle et intellectuelle</h5>
          <ul>
            <li>Conseil Superbrands au Maroc</li>
            <li>
              Conseil en cession de droits de fabrication et de licences :
              3MMUSD
            </li>
            <li>
              Conseil pour la mise en place d’un brevet dans le domaine
              industriel : 1MMUSD
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompTrack",
};
</script>
<style scoped>
.content-conseil {
  width: 50%;
  float: left;
  margin-top: 70px;
}
.title {
  padding: 90px 0px;
  background-image: url("../assets/archives-track-record.jpg");
  background-position: center center;
  background-size: cover;
}
.title h2 {
  color: rgba(255, 255, 255, 0.774);
  text-align: center;
  font-size: 50px;
}
.conseil-title {
  color: #9a3040;
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.Conseil {
  width: 100%;
  padding: 5px 10px;
}
.conseil h5 {
  font-weight: bold;
  text-align: center;
  padding: 20px 0px;
}
.clearfix {
  clear: both;
}
@media (max-width: 991px) {
  .content-conseil {
    width: 100%;
    float: none;
  }
}
</style>
