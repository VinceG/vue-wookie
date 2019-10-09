export default [
  {
    path: "/",
    component: require("@/views/base").default,
    children: [
      {
        path: "",
        name: "homepage.index",
        component: () =>
          import(/* webpackChunkName: "homepage" */ "@/views/homepage/index")
      },
      {
        path: ":slug",
        name: "movie.view",
        props: true,
        component: () =>
          import(/* webpackChunkName: "movie-view" */ "@/views/movies/view")
      }
    ]
  },
  {
    path: "*",
    component: require("@/views/errors/base").default,
    children: [
      {
        path: "",
        name: "catch.all",
        component: () =>
          import(/* webpackChunkName: "error" */ "@/views/errors/404")
      }
    ]
  },
  {
    path: "/404",
    component: require("@/views/errors/base").default,
    children: [
      {
        path: "",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "error" */ "@/views/errors/404")
      }
    ]
  }
];
