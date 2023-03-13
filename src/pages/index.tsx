import React from "react"

import Layout from "../components/layout/Layout"
import { Container } from '../components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '../components/icons/SocialIcons'

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

function Photos() {
  let rotations = ['rotate-3', '-rotate-2', 'rotate-1', 'rotate-2', '-rotate-3']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[flightImg, keyboardImg, sedenImg, polarcaseImg, domeImg ].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ' +
              rotations[imageIndex % rotations.length]
            }
          >
            {image()}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const intl = useIntl()

  return (
    <>
      <Layout>
        <Container className="mt-9">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {intl.formatMessage({id: 'headline_index'})}
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intl.formatMessage({id: 'intro_index'})}
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intl.formatMessage({id: "intro_p2"})}
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intl.formatMessage({id: "intro_p3"})}
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/SimonFlarup"
                aria-label={intl.formatMessage({id: 'aria-follow-on-github'})}
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com/in/SimonFlarup"
                aria-label={intl.formatMessage({id: 'aria-follow-on-linkedin'})}
                icon={LinkedInIcon}
              />
            </div>
          </div>
        </Container>
        <Photos />
        <Container className="mt-24 md:mt-28 hidden xl:block">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 xl:max-w-none xl:grid-cols-2">
            <div className="space-y-10 xl:pr-8">
              <Resume />
              <Other />
            </div>
            <div className="space-y-10 xl:pl-8">
              <Education/>
            </div>
          </div>
        </Container>
        <Container className="mt-24 md:mt-28 xl:hidden">
          <div className="grid mx-auto max-w-xl lg:max-w-2xl gap-y-10 xl:max-w-none xl:grid-cols-2">
            <div className="space-y-10">
              <Resume />
              <Education/>
              <Other />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"
import Seo from "../components/layout/Seo"
import { HeadFC } from "gatsby"
import { useIntl } from "react-intl"
import { flightImg, keyboardImg, sedenImg, polarcaseImg, domeImg } from "../components/pages/index/FeaturedImages"
import { Resume } from "../components/pages/index/Resume"
import { Education } from "../components/pages/index/Education"
import { Other } from "../components/pages/index/Other"

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["index_title"], "da-DK": DA["index_title"] }

  return (
    <Seo locale={locale} title={title} />
  )
}