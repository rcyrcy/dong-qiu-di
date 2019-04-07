import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/Home";
import Game from "@/pages/game/Game";
import Data from "@/pages/data/Data";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    },
    {
      path: "/data",
      name: "Data",
      component: Data
    }
  ]
});
