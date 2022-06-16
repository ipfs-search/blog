import plugin_gridsome_plugin_tailwindcss_5 from "/Users/drbob/Development/blog/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelist":["svg-inline--fa","table","table-striped","table-bordered","table-hover","table-sm"],"whitelistPatterns":[{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":false,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true}
  }
]
