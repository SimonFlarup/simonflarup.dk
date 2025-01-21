import * as React from "react"
import { HeadFC, navigate } from "gatsby"
import { useIntl } from "react-intl"
import Seo from "../components/layout/Seo"

const NotFoundPage = ({location}: any) => {
  const intl = useIntl()

  return (
    <Layout>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {intl.formatMessage({ id: "404" })}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <a className="text-red-500 dark:text-red-400" href={"#"} onClick={() => navigate(-1)}>{intl.formatMessage({ id: "404_go_back" })}</a> {intl.formatMessage({ id: "404_or" })} <Link to={"/"} className="text-red-500 dark:text-red-400">{intl.formatMessage({ id: "404_go_home" })}</Link>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

import EN from "../../i18n/en.json"
import DA from "../../i18n/da.json"
import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"
import { Link } from "gatsby-plugin-intl"

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["404_title"], "da-DK": DA["404_title"] }

  return (
    <Seo locale={locale} title={title} />
  )
}
