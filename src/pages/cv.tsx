import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import Seo from "../components/layout/Seo"

export interface ExperienceProp {
  company: string,
  title: string,
  start: string,
  end: string,
  description?: ReactNode,
}

function Experience(props: {experience: ExperienceProp}) {
  return (
    <div className="">
      <hr className="mt-3 border-t border-zinc-700/40 dark:border-zinc-200"/>

      <div className="flex mt-3">
        <p className="mr-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <b>{props.experience.title}</b>
        <br/>
        {props.experience.company}
        </p>
        <p className="ml-auto print:text-xs text-zinc-500 dark:text-zinc-400 text-right">
          <i>{props.experience.start} - {props.experience.end}</i>
        </p>
      </div>
      {props.experience.description}
    </div>
  )
}

function URFullDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("resume_ur_full_stack_desc")}
      <br/><br/>
      {t("resume_ur_full_stack_ext_desc")}
      <br/><br/>
      {t("resume_ur_full_stack_ext_desc_2")}
      <br/><br/>
      {t("resume_ur_full_stack_ext_desc_3")}
      <br/><br/>
      <u>{t("achievements")}</u>
      <br/>
      <div className="ml-8">
        {t("cv_ur_full_li_1")}
        <br/>
        {t("cv_ur_full_li_2")}
        <br/>
        {t("cv_ur_full_li_3")}
        <br/>
        {t("cv_ur_full_li_4")}
        <br/>
        {t("cv_ur_full_li_5")}
      </div>
    </p>
  )
}

function URDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("resume_ur_desc")}
      <br/><br/>
      {t("resume_ur_ext_desc_tech")}
      <br/><br/>
      <u>{t("responsibility")}</u>
      <br/>
      <div className="ml-8">
        {t("resume_ur_ext_desc_p1")}
        <br/>
        {t("resume_ur_ext_desc_p2")}
        <br/>
        {t("resume_ur_ext_desc_p3")}
        <br/>
        {t("resume_ur_ext_desc_p4")}
        <br/>
        {t("resume_ur_ext_desc_p5")}
      </div>
    </p>
  )
}

function BroenDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("resume_broen_desc")}
      <br/><br/>
      {t("resume_broen_ext_desc_tech")}
    </p>
  )
}

function AarhusDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("cv_apprentice_desc_1")}
      <br/><br/>
      {t("resume_apprentice_ext_desc_tech")}
    </p>
  )
}

function ElgigantenDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("resume_elgiganten_desc")}
    </p>
  )
}

function MScDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>{t("projects")}</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>The longevity of modern software: A study of operational risks connected to open source libraries</li>
          <li>Mitigating the accumulation of technical debt and addressing existing productivity inhibitors</li>
        </ul>
    </p>
  )
}

function BScDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>{t("projects")}</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>Data-driven mobile application for enhanced guest experiences</li>
        </ul>
    </p>
  )
}

function HFDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("education_hf_desc")}
    </p>
  )
}

function EUXDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("cv_education_eux_1")}
    </p>
  )
}

function EfterskoleDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
    </p>
  )
}

function RedmewDesc() {
  const {t} = useTranslation();

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {t("cv_redmew_1")}
      <br/><br/>
      {t("other_redmew_ext_desc_tech")}
    </p>
  )
}

const CV = ({data}: any) => {
  const {t} = useTranslation();

  let workExperience: ExperienceProp[] = [
    {
      company: "Universal Robots A/S",
      title: t("software-engineer"),
      start: "April 2023",
      end: t("present"),
      description: URFullDesc()
    },
    {
      company: "Universal Robots A/S",
      title: t("software-developer"),
      start: t("january") + " 2021",
      end: "April 2023",
      description: URDesc()
    },
    {
      company: "BROEN Valve Technologies",
      title: t("student-worker"),
      start: "August 2019",
      end: t("january") + " 2021",
      description: BroenDesc()
    },
    {
      company: "Aarhus Tech",
      title: t("apprentice"),
      start: "August 2016",
      end: "August 2017",
      description: AarhusDesc()
    },
    {
      company: "Elgiganten",
      title: t("cv_elgiganten_title"),
      start: t("october") + " 2015",
      end: "August 2016",
      description: ElgigantenDesc()
    },
  ]

  let education: ExperienceProp[] = [
    {
      company: t("sdu"),
      title: t("cv_msc_title"),
      start: "September 2021",
      end: t("july") + "  2023",
      description: MScDesc()
    },
    {
      company: t("sdu"),
      title: t("cv_bsc_title"),
      start: "September 2018",
      end: t("july") + "  2021",
      description: BScDesc()
    },
    {
      company: "Randers HF & VUC",
      title: t("higher-preparatory-examination"),
      start: "August 2017",
      end: t("july") + "  2018",
      description: HFDesc()
    },
    {
      company: "Aarhus Tech & Tradium Randers",
      title: t("cv_eux_title"),
      start: "August 2015",
      end: "August 2017",
      description: EUXDesc()
    },
    /*{
      company: "Bjergsnæs Efterskole",
      title: t("lower-secondary-education"),
      start: "August 2014",
      end: t("july") + "  2015",
      description: EfterskoleDesc()
    }*/
  ]

  return (
    <Layout printHide={true}>
      <Container printHide={true}>
        <div className="px-5 rounded-2xl">
          <div className="flex w-full flex-col">
            <div className="flex flex-col w-full">
              <div className="flex gap-8 print:mt-5">
                <div className="hidden print:block shrink basis-[20%] my-auto">
                  <div className="">
                    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData}
                    className={'rounded-full bg-zinc-100 object-scale-down dark:bg-zinc-800 aspect-square'} alt={"Profile Picture of Simon Holland Flarup"}                    />
                  </div>
                </div>
                <div className="flex flex-col my-auto w-full">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Simon Holland Flarup
                  </h1>
                  <h1 className="text-lg text-zinc-800 dark:text-zinc-100">
                    {t("headline_index")}
                  </h1>
                </div>
              </div>
              <span className="my-3 border-t-2 border-zinc-700/40 dark:border-zinc-200"/>
              <div className="">
                <CVData className="grid print:hidden md:grid-cols-2 2xl:grid-cols-3 gap-2"/>
              </div>
              <div className="">
                <CVData className="hidden print:grid grid-cols-3 gap-2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <InfoCircleIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("cv_summary_title")}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              {t("cv_summary_1")}
              <br/><br/>
              {t("cv_summary_2")}
            </p>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("cv_work_title")}</span>
            </h2>
            
            {workExperience.map((role: ExperienceProp) => (
              <Experience experience={role}/>
            ))}
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <AcademicIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("education")}</span>
            </h2>
            {education.map((role: ExperienceProp) => (
              <Experience experience={role}/>
            ))}
          </div>

          <div className="grid print:grid-cols-2 print:gap-8 xl:grid-cols-2 xl:gap-8 break-inside-avoid-page">

          <div className="flex flex-col justify-between">

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <LanguageIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("cv_language_title")}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <div className="grid print:grid-cols-2 lg:grid-cols-2 lg:gap-1 print:gap-1">
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{t("cv_language_danish")}</b> - {t("cv_language_mother_tongue")}
              </p>
              <p className="mt-2 order-last print:order-2 lg:order-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{t("cv_language_german")}</b> - {t("cv_language_basic")}
              </p>
              <p className="mt-2 print:order-3 lg:order-3 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{t("cv_language_english")}</b> - {t("cv_language_fluent")}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <TagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("other_title")}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>{t("other_drivers_licence_title")}</b> - {t("other_category_drivers_license")}
            </p>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>{t("other_glenten_title")}</b> - Glenten Antennelaug (2018 - 2025)
            </p>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <SmileyIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("volunteering")}</span>
            </h2>
            <Experience experience={{
              company: "Redmew.com - Factorio community",
              title: t("other_redmew_title"),
              start: t("may") + "  2018",
              end: t("present"),
              description: RedmewDesc()
            }}/>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <HashtagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{t("cv_keywords_title")}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              Java – Python – Typescript – C++ – C# – .NET – OSGi – SCRUM – LUA – PHP – JUnit – Spring Boot – JavaScript – Angular – NX – Cypress – Karma – Jest – Groovy – REST – JSON
              – Docker – IntelliJ IDEA – Atlassian – Jira – Bitbucket – Confluence – Jenkins
            </p>
          </div>
        
        </div>

      </Container>
    </Layout>
  )
}

function CVData(props:{className:string}) {
  const {t} = useTranslation();

  const [age, setAge] = useState(26)
  
  function calculateAge(birthday: Date) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    setAge(calculateAge(new Date("1998-12-01")))
  }, []);

  return(
    <div className={props.className}>
      <div className="flex gap-2">
        <CakeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
        {age} {t("cv_age")}
        </p>
      </div>
      <div className="flex gap-2">
        <HomeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
        {t("cv_location")}
        </p>
      </div>
      <div className="flex gap-2">
        <OutlineMailIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
          <a href="mailto:mail@simonflarup.dk">mail@simonflarup.dk</a>
        </p>
      </div>
      <div className="flex gap-2">
        <PhoneIcon className="h-6 w-6 print:h-5 print:w-5flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
          <a href="tel:+4520995563">(+45) 20 99 55 63</a>
        </p>
      </div>
      <div className="flex gap-2">
        <WebIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
          <a href="https://www.simonflarup.dk">www.simonflarup.dk</a>
        </p>
      </div>
      <div className="flex gap-2">
        <WebIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
        <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
          <a href="https://www.linkedin.com/in/simonflarup">www.linkedin.com/in/simonflarup</a>
        </p>
      </div>
    </div>
  )
}

export default CV

import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"
import { GatsbyImage } from "gatsby-plugin-image"
import { ReactNode, useEffect, useState } from "react"
import { AcademicIcon, BriefcaseIcon, CakeIcon, HashtagIcon, HomeIcon, InfoCircleIcon, LanguageIcon, OutlineMailIcon, PhoneIcon, SmileyIcon, TagIcon, WebIcon } from "../components/icons/MiscIcons"
import { useTranslation } from "gatsby-plugin-react-i18next"

export const Head = ({pageContext}: any) => {
  const lang = pageContext?.i18n.language;
  const title = lang == "en" ? "CV" : "CV"

  return (
    <Seo title={title} />
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    file(relativePath: { eq: "simon_portrait_ur.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
