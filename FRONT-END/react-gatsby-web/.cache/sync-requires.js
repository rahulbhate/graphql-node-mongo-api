const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-gatsby-web/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-gatsby-web/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-gatsby-web/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-gatsby-web/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/rahulbhate/pluralsight-projects/graphql-node-mongo-api/FRONT-END/react-gatsby-web/src/pages/using-typescript.tsx")))
}

