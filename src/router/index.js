import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cabinet from "../views/Cabinet.vue";
import expertise from "../views/expertise.vue";
import equipe from "../views/equipe.vue"
import TrackRecord from "../views/TrackRecord.vue"
import Contactez from "../views/Contactez.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/Cabinet",
    name:"Cabinet",
    component :Cabinet
  },{
    path:"/expertise",
    name:".expertise",
    component:expertise
  },{
    path:"/equipe",
    name:"equipe",
    component:equipe
  },{
    path:"/TrackRecord",
    name:"TrackRecord",
    component:TrackRecord
  },{
    path:"/Contactez",
    name:"Contactez",
    component:Contactez
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
