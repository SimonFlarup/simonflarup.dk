import React, { PropsWithChildren, ReactNode } from "react"
import { useIntl } from "react-intl"
import { TagIcon } from "../../icons/MiscIcons"
import { Disclosure } from "@headlessui/react"

export interface Other {
    company: string,
    title: string,
    start?: {
      label: string,
      dateTime?: number
    },
    end?: {
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

function RedMewDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      {intl.formatMessage({ id: "other_redmew_desc" })}
    </DescTemplate>
  )
}

function RedMewExtendedDescription() {
  const intl = useIntl()

  return(
    <DescTemplate>
      <br/>
      {intl.formatMessage({ id: "other_redmew_ext_desc_p1" })}
      <br/><br/>
      {intl.formatMessage({ id: "other_redmew_ext_desc_tech" })}
    </DescTemplate>
  )
}

  
export function Other() {
  const intl = useIntl()

  let other: Other[] = [
    {
      company: 'RedMew.com - Factorio Community',
      title: intl.formatMessage({ id: "other_redmew_title" }),
      start: { label: '2018' },
      end: {
        label: intl.formatMessage({id: 'present'}),
        dateTime: new Date().getFullYear(),
      },
      description: RedMewDescription(),
      extendedDescription: RedMewExtendedDescription()
    },
    {
      company: intl.formatMessage({ id: "other_category_drivers_license" }),
      title: intl.formatMessage({ id: "other_drivers_licence_title" }),
    },
    {
      company: 'Glenten Antennelaug', 
      title: intl.formatMessage({ id: "other_glenten_title" }),
      start: { label: '2018' },
      end: { label: '2026' },
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 pt-6 px-6 pb-4 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TagIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{intl.formatMessage({id: 'other_title'})}</span>
      </h2>
      <ol className="mt-6">
        {other.map((role: Other, roleIndex) => (
          <li key={roleIndex} className="flex flex-col">
            <Disclosure>
            {({ open }) => (
              <Disclosure.Button className="flex flex-col" disabled={role.extendedDescription ? false : true}>
                <div className="w-full flex gap-4">
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">{intl.$t({id: 'sr-role'})}</dt>
                  <dd className="w-full flex text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.title}
                  </dd>
                  <dt className="sr-only">{intl.$t({id: 'sr-company'})}</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.company}
                  </dd>
                  {role.start && role.end ? <div className="flex flex-auto">
                  <dt className="sr-only">{intl.$t({id: 'sr-date'})}</dt>
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
                  </div>
                : <div/>}
                </dl>
                </div>
                <div className={role.description ? "flex gap-4 mt-2" : 'hidden'}>
                    <span className="relative flex w-4 flex-none"/>
                    {role.description}
                </div>
                <div className={open || !role.extendedDescription ? 'hidden' : 'block w-full text-xs text-zinc-500 dark:text-zinc-400 text-right'}>
                  {intl.formatMessage({ id: "disclosure_read_more" })}
                </div>
                <Disclosure.Panel className="flex gap-4">
                  <span className="relative flex w-4 flex-none"/>
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