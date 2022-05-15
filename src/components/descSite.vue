<template>
  <div>
    <section>
      <div class="container">
        <p>
          Fondé par Me Mehdi DIOURI,
          <span>DIOURI LAW FIRM S.C.P. (DLF)</span> est le fruit de la fusion de
          deux cabinets dont celui de Me Rachid DIOURI, réputé depuis près d’un
          demi-siècle pour son expertise en contentieux. DLF est un cabinet qui
          intervient autant nationalement qu’internationalement et dont le cœur
          de métier est le droit des affaires – son expertise en couvre
          l’ensemble des aspects. Il compte une quinzaine d’avocats, dont quatre
          associés.
        </p>
        <button>En savoir plus</button>
      </div>
    </section>
    <div class="expertises">
      <div class="container">
        <h2>Nos expertises</h2>
        <div class="expertise-conseil">
          <h3>Expertise Conseil</h3>
          <p>Corporate : M&A, Private Equity, LBO-MBO</p>
          <p>Droit bancaire et financement</p>
          <p>Droit minier et énergie</p>
          <p>Droit des T.I.C. et des médias</p>
          <p>Droit commercial</p>
          <p>Droit de la propriété industrielle et intellectuelle</p>
          <p>Droit administratif et marchés publics</p>
          <p>Droit social</p>
          <a href="#">En Savoir plus > </a>
        </div>
        <div class="expertise-contentieux">
          <h3>Expertise Contentieux</h3>
          <p>Contentieux commercial</p>
          <p>Contentieux administratif</p>
          <p>Contentieux bancaire</p>
          <p>Contentieux maritime</p>
          <p>Contentieux des assurances</p>
          <p>Contentieux des affaires et arbitrage</p>
          <p>Contentieux social</p>
          <a href="#">En Savoir plus > </a>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="Philosophie">
      <div class="container">
        <h2>Notre Philosophie</h2>
        <div class="choix">
          <img src="@/assets/bureau-smaller.jpg" alt="" />
          <h4>Ethique et confidentialité</h4>
          <p>
            Le Cabinet Diouri met au premier plan le respect de la
            <span>confidentialité</span> due à ses clients, et des
            <br />
            principes éthiques régissant l’exercice de la profession
          </p>
        </div>

        <div class="choix">
          <img src="@/assets/equipe-2-smaller.jpg" alt="bureau smaller" />
          <h4>Dynamisme et esprit d’équipe</h4>
          <p>
            Le Cabinet s’est entouré d’une équipe jeune, dynamique, plurilingue,
            expérimentée, et passionnées par sa profession. L’équipe a établi
            une véritable synergie, un esprit de solidarité et d’entre-aide, de
            co-fraternité, favorable à un environnement de travail sain et
            productif.
          </p>
        </div>
        <div class="choix">
          <img src="@/assets/accueil-2-smaller.jpg" alt="" />
          <h4>Des partenariats solides</h4>
          <p>
            En 2013, DLF s’est associé avec Solferino Associés, Cabinet
            d’avocats indépendants en Droit des affaires basé à Paris. DLF
            travaille aussi en étroite collaboration avec des cabinets d’avocats
            Nord-Américains, Européens et Moyen Orientaux.
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "descSite",
};
</script>
<style scoped>
section {
  background-color: #eee;
  text-align: center;
  padding: 40px 0px;
}
section p {
  padding: 20px 40px;
}
section span {
  font-weight: bold;
}
section button {
  background-color: #9a3040;
  color: white;
  border: none;
  padding: 8px 15px;
}
section button:hover::after {
  content: ">";
  transition: all 5s ease-in-out;
}
.expertises {
  padding: 40px 0px;
  background-color: #fff;
}
.expertises h2,
.Philosophie h2 {
  text-transform: uppercase;
  color: #9a3040;
  font-size: 35px;
  text-align: center;
  margin: 50px auto;
}
h3 {
  margin-bottom: 20px;
}
.expertise-conseil {
  width: 50%;
  float: left;
  border-right: 1px solid black;
  text-align: center;
}
.expertise-contentieux {
  width: 50%;
  float: right;
  text-align: center;
}
.clearfix {
  clear: both;
}
a {
  color: #9a3040;
  text-decoration: none;
}
a:hover {
  color: #9a3040;
  text-decoration: none;
}
.Philosophie {
  margin-bottom: 50px;
}
.choix {
  width: 30%;
  float: left;
  text-align: center;
}
.choix:nth-of-type(2) {
  margin-left: 5%;
  margin-right: 5%;
}
.choix img {
  width: 100%;
}
.choix h4 {
  color: #9a3040;
  margin: 10px auto;
}
.choix p {
  line-height: 1;
  color: #666;
  font-family: "PT Serif";
}
span {
  font-weight: bold;
}
@media (max-width: 768px) {
  .expertise-conseil,
  .expertise-contentieux {
    width: 80%;
    margin: 0 auto;
    float: none;
    border-color: transparent;
    margin-bottom: 30px;
  }
  .choix {
    width: 100%;
    margin: 10px auto !important;
  }
}
</style>
