import * as React from "react"
import { HeadFC, navigate } from "gatsby"
import { useIntl } from "react-intl"
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
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'resume_ur_full_desc'})}
      <br/><br/>
      {intl.formatMessage({id: 'cv_ur_full_desc_2'})}
      <br/>
      {intl.formatMessage({id: 'cv_ur_full_desc_3'})}
      <br/><br/>
      {intl.formatMessage({id: 'cv_ur_full_desc_4'})}
    </p>
  )
}

function URDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'resume_ur_desc'})}
      <br/><br/>
      {intl.formatMessage({id: 'resume_ur_ext_desc_tech'})}
      <br/><br/>
      <u>{intl.formatMessage({id: 'responsibility'})}</u>
      <br/>
      <div className="ml-8">
        {intl.formatMessage({id: 'resume_ur_ext_desc_p1'})}
        <br/>
        {intl.formatMessage({id: 'resume_ur_ext_desc_p2'})}
        <br/>
        {intl.formatMessage({id: 'resume_ur_ext_desc_p3'})}
        <br/>
        {intl.formatMessage({id: 'resume_ur_ext_desc_p4'})}
        <br/>
        {intl.formatMessage({id: 'resume_ur_ext_desc_p5'})}
      </div>
    </p>
  )
}

function BroenDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'resume_broen_desc'})}
      <br/><br/>
      {intl.formatMessage({id: 'resume_broen_ext_desc_tech'})}
    </p>
  )
}

function AarhusDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'cv_apprentice_desc_1'})}
      <br/><br/>
      {intl.formatMessage({id: 'resume_apprentice_ext_desc_tech'})}
    </p>
  )
}

function ElgigantenDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'resume_elgiganten_desc'})}
    </p>
  )
}

function MScDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>{intl.formatMessage({id: 'projects'})}</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>The longevity of modern software: A study of operational risks connected to open source libraries</li>
          <li>Mitigating the accumulation of technical debt and addressing existing productivity inhibitors</li>
        </ul>
    </p>
  )
}

function BScDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>{intl.formatMessage({id: 'projects'})}</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>Data-driven mobile application for enhanced guest experiences</li>
        </ul>
    </p>
  )
}

function HFDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'education_hf_desc'})}
    </p>
  )
}

function EUXDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'cv_education_eux_1'})}
    </p>
  )
}

function EfterskoleDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
    </p>
  )
}

function RedmewDesc() {
  const intl = useIntl()

  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      {intl.formatMessage({id: 'cv_redmew_1'})}
      <br/><br/>
      {intl.formatMessage({id: 'other_redmew_ext_desc_tech'})}
    </p>
  )
}



const CV = ({location}: any) => {
  const intl = useIntl()

  let workExperience: ExperienceProp[] = [
    {
      company: "Universal Robots A/S",
      title: intl.formatMessage({id: 'software-engineer'}),
      start: "April 2023",
      end: intl.formatMessage({id: 'present'}),
      description: URFullDesc()
    },
    {
      company: "Universal Robots A/S",
      title: intl.formatMessage({id: 'software-developer'}),
      start: intl.formatMessage({id: 'january'}) + " 2021",
      end: "April 2023",
      description: URDesc()
    },
    {
      company: "BROEN Valve Technologies",
      title: intl.formatMessage({id: 'student-worker'}),
      start: "August 2019",
      end: intl.formatMessage({id: 'january'}) + " 2021",
      description: BroenDesc()
    },
    {
      company: "Aarhus Tech",
      title: intl.formatMessage({id: 'apprentice'}),
      start: "August 2016",
      end: "August 2017",
      description: AarhusDesc()
    },
    {
      company: "Elgiganten",
      title: intl.formatMessage({id: 'cv_elgiganten_title'}),
      start: intl.formatMessage({id: 'october'}) + " 2015",
      end: "August 2016",
      description: ElgigantenDesc()
    },
  ]

  let education: ExperienceProp[] = [
    {
      company: intl.formatMessage({id: 'sdu'}),
      title: intl.formatMessage({id: 'cv_msc_title'}),
      start: "September 2021",
      end: intl.formatMessage({id: 'july'}) + "  2023",
      description: MScDesc()
    },
    {
      company: intl.formatMessage({id: 'sdu'}),
      title: intl.formatMessage({id: 'cv_bsc_title'}),
      start: "September 2018",
      end: intl.formatMessage({id: 'july'}) + "  2021",
      description: BScDesc()
    },
    {
      company: "Randers HF & VUC",
      title: intl.formatMessage({id: 'higher-preparatory-examination'}),
      start: "August 2017",
      end: intl.formatMessage({id: 'july'}) + "  2018",
      description: HFDesc()
    },
    {
      company: "Aarhus Tech & Tradium Randers",
      title: intl.formatMessage({id: 'cv_eux_title'}),
      start: "August 2015",
      end: "August 2017",
      description: EUXDesc()
    },
    {
      company: "Bjergsnæs Efterskole",
      title: intl.formatMessage({id: 'lower-secondary-education'}),
      start: "August 2014",
      end: intl.formatMessage({id: 'july'}) + "  2015",
      description: EfterskoleDesc()
    }
  ]

  return (
    <Layout printHide={true}>
      <Container className="">
        <div className="px-5 rounded-2xl">
          <div className="flex w-full flex-col">
            <div className="flex flex-col w-full">
              <div className="flex gap-8 print:mt-5">
                <div className="hidden print:block shrink basis-[20%] my-auto">
                  <div className="">
                    <StaticImage
                      src={"../../images/simon_portrait_ur.jpg"}
                      alt=""
                      className={'rounded-full bg-zinc-100 object-scale-down dark:bg-zinc-800 aspect-square'}
                    />
                  </div>
                </div>
                <div className="flex flex-col my-auto w-full">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Simon Holland Flarup
                  </h1>
                  <h1 className="text-lg text-zinc-800 dark:text-zinc-100">
                    {intl.formatMessage({ id: 'headline_index' })}
                  </h1>
                </div>
              </div>
              <span className="my-3 border-t-2 border-zinc-700/40 dark:border-zinc-200"/>
              <div className="grid print:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="flex gap-2">
                  <CakeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                  {intl.formatMessage({ id: 'cv_age' })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <HomeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                  {intl.formatMessage({ id: 'cv_location' })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <OutlineMailIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    mail@simonflarup.dk
                  </p>
                </div>
                <div className="flex gap-2">
                  <PhoneIcon className="h-6 w-6 print:h-5 print:w-5flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    (+45) 20 99 55 63
                  </p>
                </div>
                <div className="flex gap-2">
                  <WebIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    www.simonflarup.dk
                  </p>
                </div>
                <div className="flex gap-2">
                  <WebIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    www.linkedin.com/in/simonflarup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <InfoCircleIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'cv_summary_title'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              {intl.formatMessage({id: 'cv_summary_1'})}
              <br/><br/>
              {intl.formatMessage({id: 'cv_summary_2'})}
            </p>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'cv_work_title'})}</span>
            </h2>
            
            {workExperience.map((role: ExperienceProp) => (
              <Experience experience={role}/>
            ))}
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <AcademicIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'education'})}</span>
            </h2>
            {education.map((role: ExperienceProp) => (
              <Experience experience={role}/>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 break-inside-avoid-page">

          <div className="flex flex-col justify-between">

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <LanguageIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'cv_language_title'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <div className="grid grid-cols-2">
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{intl.formatMessage({id: 'cv_language_danish'})}</b> - {intl.formatMessage({id: 'cv_language_mother_tongue'})}
              </p>
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{intl.formatMessage({id: 'cv_language_german'})}</b> - {intl.formatMessage({id: 'cv_language_basic'})}
              </p>
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>{intl.formatMessage({id: 'cv_language_english'})}</b> - {intl.formatMessage({id: 'cv_language_fluent'})}
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <TagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'other_title'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>{intl.formatMessage({id: 'other_drivers_licence_title'})}</b> - {intl.formatMessage({id: 'other_category_drivers_license'})}
            </p>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>{intl.formatMessage({id: 'other_glenten_title'})}</b> - Glenten Antennelaug (2018 - 2026)
            </p>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <SmileyIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'volunteering'})}</span>
            </h2>
            <Experience experience={{
              company: "Redmew.com - Factorio community",
              title: intl.formatMessage({id: 'other_redmew_title'}),
              start: "May 2018",
              end: intl.formatMessage({id: 'present'}),
              description: RedmewDesc()
            }}/>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <HashtagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'cv_keywords_title'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              Java – Python – Typescript – C++ – C# – .NET – OSGi – SCRUM – LUA – PHP – JavaScript – Groovy – REST – JSON
              – Docker – IntelliJ IDEA – Atlassian – Jira – Bitbucket – Confluence – Jenkins
            </p>
          </div>
        
        </div>

      </Container>
    </Layout>
  )
}

export default CV

import Layout from "../components/layout/Layout"
import { Container } from "../components/Container"
import { StaticImage } from "gatsby-plugin-image"
import { ReactNode } from "react"
import { AcademicIcon, BriefcaseIcon, CakeIcon, HashtagIcon, HomeIcon, InfoCircleIcon, LanguageIcon, OutlineMailIcon, PhoneIcon, SmileyIcon, TagIcon, WebIcon } from "../components/icons/MiscIcons"

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": "CV", "da-DK": "CV" }

  return (
    <Seo locale={locale} title={title} />
  )
}
