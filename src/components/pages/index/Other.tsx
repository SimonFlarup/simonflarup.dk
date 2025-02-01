import React, { PropsWithChildren, ReactNode } from "react"
import { TagIcon } from "../../icons/MiscIcons"
import { Disclosure } from "@headlessui/react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { DescTemplate, Timeline, TimelineContent } from "./Timeline"

function RedMewDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      {t("other_redmew_desc")}
    </DescTemplate>
  )
}

function RedMewExtendedDescription() {
  const {t} = useTranslation();

  return(
    <DescTemplate>
      <br/>
      {t("other_redmew_ext_desc_p1")}
      <br/><br/>
      {t("other_redmew_ext_desc_tech")}
    </DescTemplate>
  )
}

  
export function Other() {
  const {t} = useTranslation();

  let other: TimelineContent[] = [
    {
      subtitle: 'RedMew.com - Factorio Community',
      title: t("other_redmew_title"),
      start: { label: '2018' },
      end: {
        label: t("present"),
        dateTime: new Date().getFullYear(),
      },
      description: RedMewDescription(),
      extendedDescription: RedMewExtendedDescription()
    },
    {
      subtitle: t("other_category_drivers_license"),
      title: t("other_drivers_licence_title"),
    },
    {
      subtitle: 'Glenten Antennelaug', 
      title: t("other_glenten_title"),
      start: { label: '2018' },
      end: { label: '2025' },
    }
  ]

  return (
    <Timeline icon={icon} title={t("other_title")} content={other}/>
  )
}

const icon = () => {
  return(
    <TagIcon className="h-10 w-10 flex-none" />
  )
}