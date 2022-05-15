<template>
  <div>
    <div class="container">
      <div class="form-contact">
        <h2 class="title">Contactez-nous</h2>
        <form action="">
          <input type="text" placeholder="Nom" class="nom" />
          <input type="email" placeholder="adresse-email" class="email" />
          <div class="clearfix"></div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            class="message"
          ></textarea>
        </form>
        <button>Soumettres</button>
      </div>
      <div class="adresse">
        <h3>DIOURI LAW FIRM S.C.P.</h3>
        <p>7, rue Mohamed Benbrahim Angle boulevard</p>
        <p>Abderrahim Bouabid Oasis – Casablanca</p>
        <p>
          <a href="mailto:zakaria.mouchtati@gmail.com">Adresse Mail </a>
          +212 621 586 010 / +212 521 586 010
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactezNous",
};
</script>
<style scoped>
.form-contact {
  width: 60%;
  float: left;

  padding: 40px 0px 80px;
  position: relative;
}
.form-contact .title {
  font-size: 40px;
  color: #9a3040 !important;
  padding: 30px 10px;
}
.clearfix {
  clear: both;
}
.form-contact input,
textarea {
  outline: none;
  padding: 8px;
  border-radius: 15px;
  border-color: transparent;
  background-color: #eee;
}
.form-contact .nom {
  width: 46%;
  float: left;
  margin-right: 4%;
  margin-left: 2%;
}
.form-contact .email {
  width: 46%;
  float: left;
  margin-right: 2%;
}
.form-contact .message {
  width: 96%;
  margin: 20px 2%;
}

button {
  position: absolute;
  right: 20px;
  bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #9a3040;
  color: #fff;
  padding: 15px;
}
.adresse {
  width: 38%;
  float: left;
  height: 400px;
  padding: 40px 10px 80px 0px;
  margin-top: 40px;
  margin-left: 2%;
}
.adresse h3 {
  color: #666;
  font-size: 20px;
  padding: 80px 10px 5px;
}
.adresse p {
  margin-bottom: 5px;
}
@media (max-width: 576px) {
  .form-contact .nom {
    width: 96%;
    float: none;
    margin: 10px 2%;
  }
  .form-contact .email {
    width: 96%;
    float: none;
    margin: 10px 2%;
  }
  button {
    right: 38%;
    bottom: 10px;
  }
}
@media (max-width: 768px) {
  .form-contact {
    float: none;
    width: 100% !important;
    margin: 20px auto 0px;
  }
  .adresse {
    width: 100%;
    float: none;
    text-align: center;
    margin-top: -20px;
  }
}
</style>
