import React, { PropsWithChildren, ReactNode } from "react"
import { useIntl } from "react-intl"
import { BriefcaseIcon } from "../../icons/MiscIcons"
import { aarhusTechImg } from "./educationImages"
import { urImg, broenImg, elgigantenImg } from "./WorkImages"
import { Disclosure } from "@headlessui/react"

export interface Resume {
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

function URFullDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "resume_ur_full_desc" })}
    </DescTemplate>
  )
}

function URDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "resume_ur_desc" })}
    </DescTemplate>
  )
}

function URExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <br/>
      <u>{intl.formatMessage({ id: "responsibility" })}</u>
      <br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_p1" })}
      <br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_p2" })}
      <br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_p3" })}
      <br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_p4" })}
      <br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_p5" })}
      <br/><br/>
      {intl.formatMessage({ id: "resume_ur_ext_desc_tech" })}
    </DescTemplate>
  )
}

function BroenDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "resume_broen_desc" })}
    </DescTemplate>
  )
}

function BroenExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <br/>
      {intl.formatMessage({ id: "resume_broen_ext_desc_tech" })}
    </DescTemplate>
  )
}

function ApprenticeDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "resume_apprentice_desc" })}
    </DescTemplate>
  )
}

function ApprenticeExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <br/>
      {intl.formatMessage({ id: "resume_apprentice_ext_desc_tech" })}
    </DescTemplate>
  )
}

function ElgigantenDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "resume_elgiganten_desc" })}
    </DescTemplate>
  )
}

  
export function Resume() {
  const intl = useIntl()

  let resume: Resume[] = [
    {
      company: 'Universal Robots A/S',
      title: intl.formatMessage({id: 'software-engineer'}),
      logo: urImg,
      start: { label: 'apr.' + ' 2023' },
      end: {
        label: intl.formatMessage({id: 'present'}),
        dateTime: new Date().getFullYear(),
      },
      description: URFullDescription(),
    },
    {
      company: 'Universal Robots A/S',
      title: intl.formatMessage({id: 'software-developer'}),
      logo: urImg,
      start: { label: 'jan.' + ' 2021' },
      end: {
        label: 'apr.' + ' 2023'
      },
      description: URDescription(),
      extendedDescription: URExtendedDescription()
    },
    {
      company: 'BROEN Valve Technologies',
      title: intl.formatMessage({id: 'student-worker'}),
      logo: broenImg,
      start: { label: 'aug. 2019' },
      end: { label: 'jan. 2021' },
      description: BroenDescription(),
      extendedDescription: BroenExtendedDescription()
    },
    {
      company: 'Aarhus Tech',
      title: intl.formatMessage({id: 'apprentice'}),
      logo: aarhusTechImg,
      start: { label: 'jan. 2017' },
      end: { label: 'aug. 2017' },
      description: ApprenticeDescription(),
      extendedDescription: ApprenticeExtendedDescription()
    },
    {
      company: 'Elgiganten A/S',
      title: 'Merchandiser',
      logo: elgigantenImg,
      start: { label: (intl.formatMessage({id: 'october-abbreviation'}) + ' 2015') },
      end: { label: 'aug. 2016' },
      description: ElgigantenDescription()
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 pt-6 px-6 pb-4 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{intl.formatMessage({id: 'work'})}</span>
      </h2>
      <ol className="mt-6">
        {resume.map((role: Resume, roleIndex) => (
          <li key={roleIndex} className="flex flex-col">
            <Disclosure>
            {({ open }) => (
              <Disclosure.Button className="flex flex-col" disabled={role.extendedDescription ? false : true}>
                <div className="w-full flex gap-4">
                <div className="relative mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  {role.logo()}
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
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