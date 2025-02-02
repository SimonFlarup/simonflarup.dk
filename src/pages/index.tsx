import React from "react"

import Layout from "../components/layout/Layout"
import { Container } from '../components/Container'
import {
  CVIcon,
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
  const {t} = useTranslation();

  return (
    <>
      <Layout>
        <Container className="mt-9">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl xs:text-2xl">
            {t("headline_index")}
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t("intro_i_am") + " "}
            <b className="text-red-500 dark:text-red-500">Simon</b>
            {", " + t("intro_index") + " "}
            <b className="text-red-500 dark:text-red-500">{t("intro_location")}</b>
            {". " + t("intro_p1") + " "}
            <a href="https://universal-robots.com"><b className="text-red-500 dark:text-red-500">{t("intro_company")}</b></a>
            .
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t("intro_p2")}
            </p>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t("intro_p3")}
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/SimonFlarup"
                aria-label={t("aria-follow-on-github")}
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com/in/SimonFlarup"
                aria-label={t("aria-follow-on-linkedin")}
                icon={LinkedInIcon}
              />
              
              <Link className="group -m-1 p-1" to={"/cv"}>
                <CVIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              </Link>
            </div>
          </div>
        </Container>
        <Photos />
        <Container className="mt-24 md:mt-28">
          <div className="grid mx-auto gap-y-10 xl:max-w-none">
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

import Seo from "../components/layout/Seo"
import { graphql, Link } from "gatsby"
import { flightImg, keyboardImg, sedenImg, polarcaseImg, domeImg } from "../components/pages/index/FeaturedImages"
import { Resume } from "../components/pages/index/Resume"
import { Education } from "../components/pages/index/Education"
import { Other } from "../components/pages/index/Other"
import { useTranslation } from "gatsby-plugin-react-i18next"

export const Head = ({pageContext}: any) => {
  const lang = pageContext?.i18n.language;
  const title = lang == "en" ? "Home Page" : "Forside"

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