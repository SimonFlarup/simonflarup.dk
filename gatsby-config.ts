import type { GatsbyConfig } from "gatsby"

import English from "./i18n/en.json"
import Danish from "./i18n/da.json"

const siteURL: string = process.env.URL || "https://www.simonflarup.dk"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Simon Holland Flarup`,
    siteUrl: siteURL,
    description: `Personal portfolio webpage for Simon Holland Flarup`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "always",
  plugins: ["gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/simon_portrait_ur.jpg"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 'gatsby-plugin-postcss', {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/i18n`,
        // supported language
        languages: [`en`, `da`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
      },
    }, {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["/**/404", "/**/404.html"],
        query: `{
          allSitePage(filter: {context: {prefix: {eq: "en"}}}) {
          nodes {
            path
          }
        }
      }`,
        resolveSiteUrl: () => siteURL,
        serialize: (props: {path: any}) => {
            return {
              url: siteURL + props.path,
              changefreq: 'daily',
              priority: 0.7,
              links: [
                { lang: 'en', url: siteURL + props.path },
                { lang: 'da', url: `${siteURL}/da${props.path}` },
                // The default in case page for user's language is not localized.
                { lang: 'x-default', url: siteURL + props.path }
              ]
            };
          }
      }
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'simonflarup',
 
        // Defines where to place the tracking script
        // boolean `true` in the head and `false` in the body
        head: false,
 
        // Set to true to include a gif to count non-JS users
        pixel: false,
 
        // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
        // for testing the integration locally.
        // TIP: set up a `Additional Site` in your GoatCounter settings
        // and use its code conditionally when you `allowLocal`, example below
        allowLocal: false,
      },
    }],
}

export default config