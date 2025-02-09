/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string,
  title: string,
  children?: React.ReactNode
}

const Seo = (props: SEOProps) => {
  const { site, sitePage } = useStaticQuery(
    graphql`
       {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
  )

  let metaDescription = site.siteMetadata.description
  if (props.description !== undefined) {
    metaDescription = props.description || metaDescription
  }
  
  const defaultTitle = site.siteMetadata?.title

  const title = props.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,300,0,0" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <script type="text/javascript" key="theme-initializer" src="/DarkModeSwitchScript.js"/>
      {props.children}
    </>
  )
}

export default Seo
