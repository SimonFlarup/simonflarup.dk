import React, { PropsWithChildren, ReactNode } from "react"
import { useIntl } from "react-intl"
import { AcademicIcon } from "../../icons/MiscIcons"
import { Disclosure } from "@headlessui/react"
import { aarhusTechImg, bsImg, randersHfImg, sduImg, tradiumImg } from "./EducationImages"

export interface Education {
    company: string,
    title: string,
    logo: () => ReactNode,
    start: {
      label: string,
      dateTime?: number
    },
    end: {
      label: string,
      dateTime?: number
    },
    description?: ReactNode,
    extendedDescription?: ReactNode
  }

function DescTemplate(props: PropsWithChildren) {
  return(
    <i className="text-xs text-zinc-500 dark:text-zinc-400 text-left">
      {props.children}
    </i>
  )
}

function MScDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <u>{intl.formatMessage({ id: "projects" })}</u>
      <br/>
      {intl.formatMessage({ id: "education_msc_thesis_title" })}
    </DescTemplate>
  )
}

function MScExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "education_msc_company_project_title" })}
    </DescTemplate>
  )
}

function BScDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <u>{intl.formatMessage({ id: "projects" })}</u>
      <br/>
      {intl.formatMessage({ id: "education_bsc_thesis_title" })}
    </DescTemplate>
  )
}

function HFDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "education_hf_desc" })}
    </DescTemplate>
  )
}

function AarhusTechDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "education_aarhustech_desc" })}
    </DescTemplate>
  )
}

function AarhusTechExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <br/>
      {intl.formatMessage({ id: "education_aarhustech_ext_desc" })}
    </DescTemplate>
  )
}

function TradiumDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "education_tradium_desc" })}
    </DescTemplate>
  )
}

export function Education() {
    const intl = useIntl()
    
    let education: Education[] = [
      {
        company: intl.formatMessage({id: 'sdu'}),
        title: intl.formatMessage({id: 'msc-software-engineering'}),
        logo: sduImg,
        start: { label: '2021' },
        end: { label: '2023'},
        description: MScDescription(),
        extendedDescription: MScExtendedDescription()
      },
      {
        company: intl.formatMessage({id: 'sdu'}),
        title: intl.formatMessage({id: 'bsc-software-engineering'}),
        logo: sduImg,
        start: { label: '2018' },
        end: { label: '2021' },
        description: BScDescription()
      },
      {
        company: 'Randers HF & VUC',
        title: intl.formatMessage({id: 'higher-preparatory-examination'}),
        logo: randersHfImg,
        start: { label: '2017' },
        end: { label: '2018' },
        description: HFDescription()
      },
      {
        company: 'Aarhus Tech',
        title: intl.formatMessage({id: 'eux-data-technician-programming'}),
        logo: aarhusTechImg,
        start: { label: '2016' },
        end: { label: '2017' },
        description: AarhusTechDescription(),
        extendedDescription: AarhusTechExtendedDescription()
      },
      {
        company: 'Tradium Randers',
        title: intl.formatMessage({id: 'eux-data-technician-programming'}),
        logo: tradiumImg,
        start: { label: '2015' },
        end: { label: '2016' },
        description: TradiumDescription()
      },
      {
        company: 'Bjergsnæs Efterskole',
        title: intl.formatMessage({id: 'lower-secondary-education'}),
        logo: bsImg,
        start: { label: '2014' },
        end: { label: '2015' },
      },
    ]
  
    return (
      <div className="rounded-2xl border border-zinc-100 pt-6 px-6 pb-4 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <AcademicIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">{intl.formatMessage({id: 'education'})}</span>
        </h2>
        <ol className="mt-6">
          {education.map((role: Education, roleIndex) => (
            <li key={roleIndex} className="flex flex-col">
              <Disclosure>
                {({ open }) => (
                <Disclosure.Button className="flex flex-col" disabled={role.extendedDescription ? false : true}>
                  <div className="w-full flex gap-4">
                    <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        {role.logo()}
                    </div>
                    <dl className="flex flex-auto flex-wrap gap-x-2 mt-1">
                      <dt className="sr-only">{intl.formatMessage({id: 'sr-role'})}</dt>
                      <dd className="w-full flex text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {role.title}
                      </dd>
                      <dt className="sr-only">{intl.formatMessage({id: 'sr-company'})}</dt>
                      <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.company}
                      </dd>
                      <dt className="sr-only">{intl.formatMessage({id: 'sr-date'})}</dt>
                      <dd
                        className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                        aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                          }`}
                      >
                        <time dateTime={(role.start.dateTime ?? role.start.label).toString()}>
                          {role.start.label ?? role.start}
                        </time>{' '}
                        <span aria-hidden="true">—</span>{' '}
                        <time dateTime={(role.end.dateTime ?? role.end).toString()}>
                          {role.end.label ?? role.end}
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <div className={role.description ? "flex gap-4 mt-2" : 'hidden'}>
                    <span className="relative flex w-11 flex-none items-center justify-center"/>
                    {role.description}
                  </div>
                  <div className={open || !role.extendedDescription ? 'hidden' : 'block w-full text-xs text-zinc-500 dark:text-zinc-400 text-right'}>
                  {intl.formatMessage({ id: "disclosure_read_more" })}
                  </div>
                  <Disclosure.Panel className="flex gap-4">
                    <span className="relative flex w-11 flex-none items-center justify-center"/>
                    {role.extendedDescription}
                  </Disclosure.Panel>
                  <span className={open || !role.extendedDescription ? 'p-2' : 'hidden'}/>
                </Disclosure.Button>
                )}
              </Disclosure>
            </li>
          ))}
        </ol>
        {/*
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        */}
      </div>
    )
  }