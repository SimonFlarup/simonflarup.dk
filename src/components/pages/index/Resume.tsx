import React, { PropsWithChildren, ReactNode } from "react"
import { ArrowDownIcon, BriefcaseIcon } from "../../icons/MiscIcons"
import { aarhusTechImg } from "./EducationImages"
import { urImg, broenImg, elgigantenImg } from "./WorkImages"
import { Disclosure } from "@headlessui/react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { DescTemplate, Timeline, TimelineContent } from "./Timeline"
import { StaticImage } from "gatsby-plugin-image"

function URFullStackDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_ur_full_stack_desc")}
    </DescTemplate>
  )
}

function URFullStackExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("resume_ur_full_stack_ext_desc")}
      <br/><br/>
      {t("resume_ur_full_stack_ext_desc_2")}
      <br/><br/>
      {t("resume_ur_full_stack_ext_desc_3")}
    </DescTemplate>
  )
}

function URFullCustomFooter() {
  const {t} = useTranslation();

  return(
    <div style={{marginInline: "auto"}} className="text-sm text-zinc-500 dark:text-zinc-400 text-left">
      <div className="flex flex-col lg:flex-row gap-4 mt-4 p-4">
      <div className="flex flex-col flex-1 max-w-96">
        <StaticImage
              src={"../../../images/portfolio/polyscope_5.png"}
              alt=""
              className="max-w-96 object-contain"
              objectFit="contain"
          />
          <b className="text-lg">PolyScope 5</b>
          <p>{t("polyscope-5-desc")}</p>
          <a href="https://www.universal-robots.com/products/polyscope-5/" className="underline">{t("polyscope-learn-more")}</a>
      </div>
      <span style={{marginLeft: "-2px"}} className="border-r-2 border-zinc-100 dark:border-zinc-700/40"/>
      <div className="flex flex-col flex-1 max-w-96">
        <StaticImage
              src={"../../../images/portfolio/polyscope_x.png"}
              alt=""
              className="max-w-96 object-contain"
              objectFit="contain"
          />
          <b className="text-lg">PolyScope X</b>
          <p>{t("polyscope-x-desc")}</p>
          <a href="https://www.universal-robots.com/products/polyscope-x/" className="underline">{t("polyscope-learn-more")}</a>
      </div>
      </div>
    </div>
  )
}

function URFullDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_ur_full_desc")}
    </DescTemplate>
  )
}

function URFullExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("resume_ur_full_ext_desc")}
      <br/><br/>
      {t("resume_ur_full_ext_desc_2")}
    </DescTemplate>
  )
}

function URDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_ur_desc")}
    </DescTemplate>
  )
}

function URExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      <u>{t("responsibility")}</u>
      <br/>
      {t("resume_ur_ext_desc_p1")}
      <br/>
      {t("resume_ur_ext_desc_p2")}
      <br/>
      {t("resume_ur_ext_desc_p3")}
      <br/>
      {t("resume_ur_ext_desc_p4")}
      <br/>
      {t("resume_ur_ext_desc_p5")}
      <br/><br/>
      {t("resume_ur_ext_desc_tech")}
    </DescTemplate>
  )
}

function BroenDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_broen_desc")}
    </DescTemplate>
  )
}

function BroenExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("resume_broen_ext_desc_tech")}
    </DescTemplate>
  )
}

function ApprenticeDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_apprentice_desc")}
    </DescTemplate>
  )
}

function ApprenticeExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("resume_apprentice_ext_desc_tech")}
    </DescTemplate>
  )
}

function ElgigantenDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("resume_elgiganten_desc")}
    </DescTemplate>
  )
}

  
export function Resume() {
  const {t} = useTranslation();

  let resume: TimelineContent[] = [
    {
      subtitle: 'Universal Robots A/S',
      title: t("full-stack-software-engineer"),
      logo: urImg,
      start: { label: 'apr.' + ' 2024' },
      end: {
        label: t("present"),
        dateTime: new Date().getFullYear(),
      },
      description: URFullStackDescription(),
      extendedDescription: URFullStackExtendedDescription(),
      customFooter: URFullCustomFooter()
    },
    {
      subtitle: 'Universal Robots A/S',
      title: t("java-software-engineer"),
      logo: urImg,
      start: { label: 'apr.' + ' 2023' },
      end: {
        label: 'apr.' + ' 2024'
      },
      description: URFullDescription(),
      extendedDescription: URFullExtendedDescription()
    },
    {
      subtitle: 'Universal Robots A/S',
      title: t("software-developer"),
      logo: urImg,
      start: { label: 'jan.' + ' 2021' },
      end: {
        label: 'apr.' + ' 2023'
      },
      description: URDescription(),
      extendedDescription: URExtendedDescription()
    },
    {
      subtitle: 'BROEN Valve Technologies',
      title: t("student-worker"),
      logo: broenImg,
      start: { label: 'aug. 2019' },
      end: { label: 'jan. 2021' },
      description: BroenDescription(),
      extendedDescription: BroenExtendedDescription()
    },
    {
      subtitle: 'Aarhus Tech',
      title: t("apprentice"),
      logo: aarhusTechImg,
      start: { label: 'jan. 2017' },
      end: { label: 'aug. 2017' },
      description: ApprenticeDescription(),
      extendedDescription: ApprenticeExtendedDescription()
    },
    {
      subtitle: 'Elgiganten A/S',
      title: 'Merchandiser',
      logo: elgigantenImg,
      start: { label: (t("october-abbreviation") + ' 2015') },
      end: { label: 'aug. 2016' },
      description: ElgigantenDescription()
    },
  ]

  return (
    <Timeline icon={icon} title={t('work')} content={resume}/>
  )
}

const icon = () => {
  return(
    <BriefcaseIcon className="h-10 w-10 flex-none" />
  )
}