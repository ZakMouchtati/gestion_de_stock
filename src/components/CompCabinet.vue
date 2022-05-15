<template>
  <div class="CompCabinet">
    <div class="title">
      <h2>Le Cabinet</h2>
    </div>
    <div class="content">
      <div class="container">
        <div class="presentation">
          <h2>Présentation</h2>
          <p>
            DIOURI LAW FIRM S.C.P. (DLF) a été fondé par Me Mehdi DIOURI, avocat
            d’affaires formé en Amérique du Nord. DLF est le fruit de la fusion
            de deux cabinets dont celui de Me Rachid DIOURI, réputé depuis près
            d’un demi-siècle pour son expertise en contentieux
          </p>
          <p>
            DLF compte aujourd’hui une quinzaine d’avocats, dont quatre
            associés. Chacun des membres de l’équipe, en plus d’être
            généraliste, est spécialisé dans un secteur particulier du droit des
            affaires
          </p>
          <p>
            Le cœur de métier du cabinet est le droit des affaires : son
            expertise en couvre l’ensemble des aspects. Qu’il s’agisse
            d’accompagner un projet stratégique (conseil) ou de défendre des
            intérêts (contentieux), la gamme complète des services juridiques
            proposés par DLF répond aux besoins des opérateurs économiques.
          </p>
          <p>
            Cabinet à vocation nationale et internationale, DLF a pour maîtres
            mots efficacité, disponibilité et réactivité, afin d’apporter les
            solutions adéquates à toutes les situations de la vie des affaires.
          </p>
        </div>
        <div class="logo">
          <img src="@/assets/cabinet-DLF-logo.jpg" alt="logo" />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="partenariats">
      <div class="logo">
        <img src="@/assets/world-globe-small.jpeg" alt="" />
      </div>
      <div class="partenariats-desc">
        <h2>Partenariats</h2>
        <p>
          En 2013, DLF s’est associé avec Solferino Associés, cabinet d’avocats
          indépendant spécialisé en droit des affaires, basé à Paris.
        </p>
        <p>
          L’objectif de ce partenariat est d’accompagner les investisseurs
          nationaux et étrangers dans le développement de leurs projets au
          Maroc, au Maghreb, en Afrique, au Moyen-Orient ou en Europe.
        </p>
        <p>
          Ce partenariat place DLF et Solferino Associés parmi les principaux
          acteurs en matière de capital markets, de droit boursier et d’emprunts
          obligataires sur ces marchés.
        </p>
        <p>
          DLF travaille aussi en étroite collaboration avec des cabinets
          d’avocats nord-américains, européens et moyen-orientaux.
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompCabinet",
};
</script>

<style scoped>
.title {
  background-image: url("../assets/le-cabinet-header.jpeg");
  padding: 100px 0px;
  text-align: center;
  background-size: cover;
  background-position: center center;
  margin-bottom: 30px;
}
.title h2 {
  font-size: 50px;
  color: #fff;
}
.presentation {
  width: 55%;
  float: left;
  margin-bottom: 30px;
}
h2 {
  font-size: 40px;
  color: #9a3040;
  padding: 20px 5px;
}
p {
  color: #666;
}
.content .logo {
  width: 45%;
  float: left;
  padding: 100px 30px;
}
.content .logo img {
  width: 100%;
  border-radius: 10px;
}
.partenariats {
  padding: 50px;
  background-color: #eee;
}
.partenariats .logo {
  width: 40%;
  float: left;
  padding-top: 40px;
}
.partenariats .logo img {
  width: 90%;
}
.partenariats .partenariats-desc {
  width: 50%;
  float: left;
}
.clearfix {
  clear: both;
}
@media (max-width: 768px) {
  .presentation,
  .partenariats .partenariats-desc {
    width: 80%;
    margin: 0 10%;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  .content .logo {
    width: 100%;
    margin: 0 0;
  }
  .content .logo img {
    width: 100%;
  }
  .partenariats .logo {
    width: 80%;
    margin: 0 10%;
  }
  .partenariats .logo img {
    width: 100%;
  }
}
</style>
