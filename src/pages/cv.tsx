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
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      Java software engineer influencing the development of Polyscope, the control and programming interface empowering the collaborative robots from Universal Robots.
      <br/><br/>
      Developing and maintaining the Java application enabling programming and operating collaborative robots, making efforts to drive further longevity through platform upgrades.
      <br/>
      Contributing to the framework for third-party contributable Java applications for integration of end of tool effectors.
      <br/><br/>
      Primarily working in a native Java suite
    </p>
  )
}

function URDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      Integrated member of the development team, responsible for maintaining and developing the user interface for controlling and programming the worlds leading collaborative robotic arms.
      <br/><br/>
      Primarily working with Java, OSGi, Docker and Python
      <br/><br/>
      <u>Responsibility</u>
      <br/>
      <ul className="list-disc ml-8">
        <li>Addressing technical debt and improvements for the software architecture</li>
        <li>Feature development for third-party extension framework, based on OSGi</li>
        <li>Implementation of features and bug fixing</li>
        <li>Migrating and upgrading external libraries including upgrading the Java environment</li>
        <li>Improving Continuous Integration through Jenkins and Docker</li>
      </ul>
    </p>
  )
}

function BroenDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        Industry 4.0 and Internet of Things pilot project. Prototyping of internet and cloud connected valves using Arduino and Microsoft Azure through NB-IoT.
        <br/><br/>
        Primarily working with C# and C++
    </p>
  )
}

function AarhusDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        Responsible for the development of software for internal usage, focusing on improving the processes of student intake and counseling within the vocational institution. Point of contact for domain users. Web and database development with server deployment.
        <br/><br/>
        Primarily working with PHP, SQL and HTML, JavaScript and CSS using the Bootstrap framework
    </p>
  )
}

function ElgigantenDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        Youth worker within technical customer support. Providing direct customer support, configuration of devices, product showcasing and troubleshooting. 
    </p>
  )
}

function MScDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>Projects</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>The longevity of modern software: A study of operational risks connected to open source libraries</li>
          <li>Mitigating the accumulation of technical debt and addressing existing productivity inhibitors</li>
        </ul>
    </p>
  )
}

function BScDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        <u>Projects</u>
        <br/>
        <ul className="list-disc ml-8">
          <li>Data-driven mobile application for enhanced guest experiences</li>
        </ul>
    </p>
  )
}

function HFDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        Tailored selection of courses for fast tracked entry to university. 2 years accredited in 11 months. 
    </p>
  )
}

function EUXDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
        Suspended combined upper secondary education and vocational education within information technology, networking and computer programming. Suspended for seeking direct admission to university. 
    </p>
  )
}

function EfterskoleDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
    </p>
  )
}

function RedmewDesc() {
  return(
    <p className="mr-2 mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
      Developer and administrator for the online community Redmew in the video game Factorio. Contributed with development of scenarios and modifications for Factorio, code review and approvals,, maintenance of online servers and head of crowdsourcing localization.
      <br/><br/>
      Primarily working with Lua og C#
    </p>
  )
}



const CV = ({location}: any) => {
  const intl = useIntl()

  let workExperience: ExperienceProp[] = [
    {
      company: "Universal Robots A/S",
      title: "Software Engineer",
      start: "April 2023",
      end: "now",
      description: URFullDesc()
    },
    {
      company: "Universal Robots A/S",
      title: "Software Developer (Part-time)",
      start: "January 2021",
      end: "April 2023",
      description: URDesc()
    },
    {
      company: "BROEN Valve Technologies",
      title: "Student Worker",
      start: "August 2019",
      end: "January 2021",
      description: BroenDesc()
    },
    {
      company: "Aarhus Tech",
      title: "Apprentice",
      start: "August 2016",
      end: "August 2017",
      description: AarhusDesc()
    },
    {
      company: "Elgiganten",
      title: "Merchandiser (Part-time)",
      start: "October 2015",
      end: "August 2016",
      description: ElgigantenDesc()
    },
  ]

  let education: ExperienceProp[] = [
    {
      company: "University of Southern Denmark",
      title: "Master of Science - Software Engineering",
      start: "September 2021",
      end: "July 2023",
      description: MScDesc()
    },
    {
      company: "University of Southern Denmark",
      title: "Bachelor of Science - Software Engineering",
      start: "September 2018",
      end: "July 2021",
      description: BScDesc()
    },
    {
      company: "Randers HF & VUC",
      title: "Higher Preparatory Examination",
      start: "August 2017",
      end: "July 2018",
      description: HFDesc()
    },
    {
      company: "Aarhus Tech & Tradium Randers",
      title: "Data technician (EUX)",
      start: "August 2015",
      end: "August 2017",
      description: EUXDesc()
    },
    {
      company: "Bjergsnæs Efterskole",
      title: "Lower Secondary Education",
      start: "August 2014",
      end: "July 2015",
      description: EfterskoleDesc()
    }
  ]

  return (
    <Layout printHide={true}>
      <Container className="">
        <div className="px-5 rounded-2xl">
          <div className="flex w-full flex-col">
            <div className="flex flex-col w-full">
              <div className="flex gap-8">
                <div className="hidden print:block shrink basis-[20%] my-auto">
                  <StaticImage
                    src={"../../images/simon_photocopy.png"}
                    alt=""
                    className={'rounded-full bg-zinc-100 object-scale-down dark:bg-zinc-800 aspect-square'}
                  />
                </div>
                <div className="flex flex-col my-auto w-full">
                  <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                    Simon Holland Flarup
                  </h1>
                  <h1 className="text-lg text-zinc-800 dark:text-zinc-100">
                    {intl.formatMessage({ id: "Young Software Engineer with a flair for software maintainability" })}
                  </h1>
                </div>
              </div>
              <span className="my-3 border-t-2 border-zinc-700/40 dark:border-zinc-200"/>
              <div className="grid print:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="flex gap-2">
                  <CakeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    24 years old
                  </p>
                </div>
                <div className="flex gap-2">
                  <HomeIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" strokeWidth={2}/>
                  <p className="print:text-xs text-zinc-500 dark:text-zinc-400 break-all">
                    5220 Odense SØ, Denmark
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
              <span className="ml-3">{intl.formatMessage({id: 'Summary'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              I am a young software engineer with a couple of years experience in software development. I have been working
              as a software developer at Universal Robots A/S for a few years. The past years I have had a focus on improving
              my skills for analyzing and improving software applications. I hope to be able to employ and refine these skills in
              the future.
              <br/><br/>
              My primary programming languages are Java, Typescript and Python, but I am knowledgeable in a wide ranges of
              technologies and programming languages. However, I would not pass on the chance of expanding my repertoire.
            </p>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'Work experience'})}</span>
            </h2>
            
            {workExperience.map((role: ExperienceProp) => (
              <Experience experience={role}/>
            ))}
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <AcademicIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'Education'})}</span>
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
              <span className="ml-3">{intl.formatMessage({id: 'Language'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <div className="grid grid-cols-2">
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>Danish</b> - Mother tongue
              </p>
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>German</b> - Basic
              </p>
              <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
                <b>English</b> - Fluent
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <TagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'Other'})}</span>
            </h2>
            <hr className="mt-2 border-t border-zinc-700/40 dark:border-zinc-200"/>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>Drivers License</b> - Category B
            </p>
            <p className="mt-2 print:text-xs text-zinc-500 dark:text-zinc-400">
              <b>Member of the advisory board</b> - Glenten Antennelaug (2018 - 2026)
            </p>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <SmileyIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'Volunteering'})}</span>
            </h2>
            <Experience experience={{
              company: "Redmew.com - Factorio community",
              title: "Developer and administrator",
              start: "May 2018",
              end: "now",
              description: RedmewDesc()
            }}/>
          </div>

          </div>

          <div className="mt-3 rounded-2xl border-2 border-zinc-200 py-4 px-6 dark:border-zinc-700/40 break-inside-avoid-page">
            <h2 className="flex print:text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              <HashtagIcon className="h-6 w-6 print:h-5 print:w-5 flex-none transition" />
              <span className="ml-3">{intl.formatMessage({id: 'Keywords'})}</span>
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

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"
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
