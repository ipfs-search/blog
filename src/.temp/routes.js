const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/drbob/Development/blog/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/drbob/Development/blog/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/drbob/Development/blog/src/templates/Author.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/drbob/Development/blog/src/templates/BlogPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/drbob/Development/blog/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/drbob/Development/blog/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/drbob/Development/blog/src/pages/Index.vue")

export default [
  {
    path: "/tags/yggdrasil/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/team/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/privacy/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/nsfw-filter/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/indexing/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/ipfs/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/hashgraph/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/history/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/holochain/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/gossip/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/guides/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/filecoin/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/frontend/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/category/user-experience/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/usability/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/tags/distribution/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/cluster/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/tags/blockchain/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/author/mathijs-de-bruin/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/lars-magne-tungland/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/name/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/kees-van-drongelen/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/author/frido-emans/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/category/ecosystem/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/decentralization/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/about/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/author/aad-versteden/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/blog/towards-a-new-front-end-for-searching-the-decentralized-web/",
    component: c4
  },
  {
    path: "/blog/why-we-created-ipfs-search-com/",
    component: c4
  },
  {
    path: "/blog/the-team-behind-ipfs-search/",
    component: c4
  },
  {
    path: "/blog/nsfw-filter-for-ipfs-search-com/",
    component: c4
  },
  {
    path: "/blog/decentralizing-ipfs-search-part-i-how-to-make-ipfs-search-decentralized-and-distributed/",
    component: c4
  },
  {
    path: "/blog/making-ipfs-search-distributed/",
    component: c4
  },
  {
    path: "/blog/decentralizing-ipfs-search-part-ii-privacy-and-trust-in-decentralized-applications/",
    component: c4
  },
  {
    path: "/blog/discover-content-on-ipfs-using-ipfs-search-com/",
    component: c4
  },
  {
    path: "/blog/ipfs-and-filecoin/",
    component: c4
  },
  {
    path: "/blog/good-enough-indexing/",
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
