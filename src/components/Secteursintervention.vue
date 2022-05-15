<template>
  <div class="Secteursintervention">
    <h2>Secteurs d’intervention</h2>

    <div class="container">
      <div class="interventionele">
        <ul>
          <li>Activités minières</li>
          <li>Agriculture et agro-industrie</li>
          <li>Assurances</li>
          <li>Aviation</li>
          <li>Banque et institutions financières</li>
        </ul>
      </div>
      <div class="interventionele">
        <ul>
          <li>Droit maritime</li>
          <li>Energie</li>
          <li>Hôtels et loisirs</li>
          <li>Immobilier</li>
          <li>Infrastructures</li>
        </ul>
      </div>
      <div class="interventionele">
        <ul>
          <li>Industrie pharmaceutique</li>
          <li>Médias</li>
          <li>Technologies de l’information</li>
          <li>Télécommunication</li>
          <li>Transport Fret et logistique</li>
        </ul>
      </div>
      <div class="Clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Secteursintervention",
};
</script>
<style scoped>
.Secteursintervention {
  padding: 40px 0px;
}
.Secteursintervention h2 {
  color: #9a3040;
  text-align: center;
  margin-bottom: 40px;
}
.interventionele {
  width: calc(100% / 3);
  text-align: center;
  float: left;
}
.interventionele ul {
  list-style: none;
}
.interventionele ul li {
  padding-bottom: 20px;
  color: #666;
}
.Clearfix {
  clear: both;
}
@media (max-width: 991x) {
  .interventionele {
    width: 100%;
  }
}
</style>
