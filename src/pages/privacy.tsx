import * as React from "react"
import { HeadFC, navigate } from "gatsby"
import { useIntl } from "react-intl"
import Seo from "../components/layout/Seo"

const PrivacyPage = ({location}: any) => {
  const intl = useIntl()

  return (
    <Layout>
      <Container className="mt-9">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {intl.formatMessage({ id: "privacy_title" })}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">{intl.formatMessage({ id: "privacy_subtitle" })}</h2>
            {intl.formatMessage({ id: "privacy_analytical_purposes" })}
            <br/><br/>
            {intl.formatMessage({ id: "privacy_anonymous_information_collected" })}
            <br/>
            <ul className="list-disc ml-10">
            <li>{intl.formatMessage({ id: "privacy_list_url" })}</li>
            <li>{intl.formatMessage({ id: "privacy_list_referer" })}</li>
            <li>{intl.formatMessage({ id: "privacy_list_user_agent" })}</li>
            <li>{intl.formatMessage({ id: "privacy_list_screensize" })}</li>
            <li>{intl.formatMessage({ id: "privacy_list_country" })}</li>
            <li>{intl.formatMessage({ id: "privacy_list_hash" })}</li>
            </ul>
            <br/>
            {intl.formatMessage({ id: "privacy_generated_hash_info" })}
            <br/><br/>
            {intl.formatMessage({ id: "privacy_github_notice" })} {intl.formatMessage({ id: "privacy_github_more_info" })} <a className="text-red-500 dark:text-red-400" href={"https://pages.github.com/"}>GitHub Pages</a>
            <hr className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 w-full"/>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPage

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"
import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["privacy_title"], "da-DK": DA["privacy_title"] }

  return (
    <Seo locale={locale} title={title} />
  )
}
