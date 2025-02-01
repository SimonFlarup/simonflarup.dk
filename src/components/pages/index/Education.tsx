import React, { PropsWithChildren, ReactNode } from "react"
import { AcademicIcon } from "../../icons/MiscIcons"
import { Disclosure } from "@headlessui/react"
import { aarhusTechImg, bsImg, randersHfImg, sduImg, tradiumImg } from "./EducationImages"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { DescTemplate, Timeline, TimelineContent } from "./Timeline"

function MScDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <u>{t("projects")}</u>
      <br/>
      {t("education_msc_thesis_title")}
    </DescTemplate>
  )
}

function MScExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("education_msc_company_project_title")}
    </DescTemplate>
  )
}

function BScDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <u>{t("projects")}</u>
      <br/>
      {t("education_bsc_thesis_title")}
    </DescTemplate>
  )
}

function HFDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("education_hf_desc")}
    </DescTemplate>
  )
}

function AarhusTechDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("education_aarhustech_desc")}
    </DescTemplate>
  )
}

function AarhusTechExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("education_aarhustech_ext_desc")}
    </DescTemplate>
  )
}

function TradiumDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("education_tradium_desc")}
    </DescTemplate>
  )
}

export function Education() {
    const {t} = useTranslation();
    
    let education: TimelineContent[] = [
      {
        subtitle: t("sdu"),
        title: t("msc-software-engineering"),
        logo: sduImg,
        start: { label: '2021' },
        end: { label: '2023'},
        description: MScDescription(),
        extendedDescription: MScExtendedDescription()
      },
      {
        subtitle: t("sdu"),
        title: t("bsc-software-engineering"),
        logo: sduImg,
        start: { label: '2018' },
        end: { label: '2021' },
        description: BScDescription()
      },
      {
        subtitle: 'Randers HF & VUC',
        title: t("higher-preparatory-examination"),
        logo: randersHfImg,
        start: { label: '2017' },
        end: { label: '2018' },
        description: HFDescription()
      },
      {
        subtitle: 'Aarhus Tech',
        title: t("eux-data-technician-programming"),
        logo: aarhusTechImg,
        start: { label: '2016' },
        end: { label: '2017' },
        description: AarhusTechDescription(),
        extendedDescription: AarhusTechExtendedDescription()
      },
      {
        subtitle: 'Tradium Randers',
        title: t("eux-data-technician-programming"),
        logo: tradiumImg,
        start: { label: '2015' },
        end: { label: '2016' },
        description: TradiumDescription()
      },
      {
        subtitle: 'Bjergsnæs Efterskole',
        title: t("lower-secondary-education"),
        logo: bsImg,
        start: { label: '2014' },
        end: { label: '2015' },
      },
    ]
  
    return (
      <Timeline icon={icon} title={t("education")} content={education}/>
    )
  }

  const icon = () => {
    return(
      <AcademicIcon className="h-10 w-10 flex-none" />
    )
  }