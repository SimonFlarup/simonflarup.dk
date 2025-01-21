import type { GatsbyConfig } from "gatsby"

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
      resolve: `gatsby-source-filesystem`,
      options: {
        "name": "locale",
        "path": "./i18n"
      },
      __key: "locale"
    }, {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `da-DK`],
        defaultLanguage: `en`,
        siteUrl: siteURL,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
        },
      }
    }, {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
        resolveSiteUrl: () => siteURL,
        query: `
          {
            allSitePage {
              edges {
                node {
                  pageContext
                }
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { edges } }: any) => {
          return edges
            .filter(
              ({ node }: any) => !["/404/", "/404.html"].includes(node.pageContext.i18n.originalPath)
            )
            .map(({ node: { pageContext } }: any) => {
              const { languages, originalPath, path, defaultLanguage } = pageContext.i18n;
              const baseUrl = siteURL + originalPath;
              const links = [{ lang: "x-default", url: baseUrl }];

              console.log("i18n: ", pageContext.i18n)
    
              languages.forEach((lang: any) => {
                const isDefaultLang = lang === defaultLanguage;
                const isDefaultPath = path === originalPath;
                const isLangSubDir = path.includes(`${lang}/`);
    
                if (isDefaultLang && isDefaultPath) return;
                if (!isDefaultLang && isLangSubDir) return;
    
                links.push({
                  lang,
                  url: isDefaultLang ? baseUrl : `${siteURL}/${lang}${originalPath}`,
                });
              });
    
              return {
                path,
                url: path === "/" ? siteURL : `${siteURL}` + (`/${path}`).replace(/\/\//g, '/'),
                changefreq: "daily",
                priority: originalPath === "/" ? 1.0 : 0.7,
                links,
              };
            });
        },
        serialize: (page: any) => page,
      },
    }, {
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