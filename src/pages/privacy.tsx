import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import Seo from "../components/layout/Seo"

const PrivacyPage = ({location}: any) => {
  const {t} = useTranslation();

  return (
    <Layout>
      <Container className="mt-9">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t("privacy_title")}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">{t("privacy_subtitle")}</h2>
            {t("privacy_analytical_purposes")}
            <br/><br/>
            {t("privacy_anonymous_information_collected")}
            <br/>
            <ul className="list-disc ml-10">
            <li>{t("privacy_list_url")}</li>
            <li>{t("privacy_list_referer")}</li>
            <li>{t("privacy_list_user_agent")}</li>
            <li>{t("privacy_list_screensize")}</li>
            <li>{t("privacy_list_country")}</li>
            <li>{t("privacy_list_hash")}</li>
            </ul>
            <br/>
            {t("privacy_generated_hash_info")}
            <br/><br/>
            {t("privacy_github_notice")} {t("privacy_github_more_info")} <a className="text-red-500 dark:text-red-400" href={"https://pages.github.com/"}>GitHub Pages</a>
            <hr className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 w-full"/>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPage

import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"
import { useTranslation } from "gatsby-plugin-react-i18next"

export const Head: HeadFC = (props) => {
  const {t} = useTranslation();

  return (
    <Seo title={t("privacy_title")} />
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