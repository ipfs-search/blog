const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/templates/Author.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/templates/Category.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/templates/BlogPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/drbob/Development/blog/ipfs-search-blog/src/pages/Index.vue")

export default [
  {
    path: "/tags/tag1/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag2/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag3/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag4/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag5/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag6/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag7/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/tag8/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/troes-retardat/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/john-doe/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/getting-started/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/health/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/hans-wurst/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/design/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/digital/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/business/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/blog/suos-novi-data-gente-edaci-custodia-canes/",
    component: c4
  },
  {
    path: "/blog/temptabat-volumina/",
    component: c4
  },
  {
    path: "/blog/troes-retardat/",
    component: c4
  },
  {
    path: "/blog/non-domum-corripuit-loquax-est-geminos-hanc/",
    component: c4
  },
  {
    path: "/blog/styles/",
    component: c4
  },
  {
    path: "/blog/monendo-decimo-referunt-supremum/",
    component: c4
  },
  {
    path: "/blog/iter-vultus-quidem-pariter-caligine-inane-hanc/",
    component: c4
  },
  {
    path: "/blog/et-aequora-inanes-fortuna-non-dextra/",
    component: c4
  },
  {
    path: "/blog/illi-litore/",
    component: c4
  },
  {
    path: "/blog/cunctas-non-toxea-inpatiens-in-virorum-surdaeque/",
    component: c4
  },
  {
    path: "/blog/aera-exspatiantur-impete-inplumes-plebe-capillos-est/",
    component: c4
  },
  {
    path: "/blog/cum-est-bis/",
    component: c4
  },
  {
    path: "/blog/dederis-faciem/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
