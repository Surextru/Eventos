import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SingleEvent from "./views/SingleEvent.vue";
import LogIn from "./views/Log_In.vue";
import Registration from "./views/Registration.vue";
import Chat from "./views/Chat.vue";
import MyEvents from "./views/MyEvents.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/single_event/:artist/:id",
      name: "single event",
      component: SingleEvent,
      props: true
    },
    {
      path: "/log_in",
      name: "log in",
      component: LogIn
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/my_events",
      name: "my events",
      component: MyEvents
    }

  ]
});
