import * as React from "react"
import { graphql, navigate } from "gatsby"
import Seo from "../components/layout/Seo"

const NotFoundPage = () => {
  const {t} = useTranslation();

  return (
    <Layout>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t("404")}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <a className="text-red-500 dark:text-red-400" href={"#"} onClick={() => navigate(-1)}>{t("404_go_back")}</a> {t("404_or")} <Link to={"/"} className="text-red-500 dark:text-red-400">{t("404_go_home")}</Link>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

export const Head = ({pageContext}: any) => {
  const lang = pageContext?.i18n.language;
  const title = lang == "en" ? "Page not found" : "Siden blev ikke fundet"

  return (
    <Seo title={title} />
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;