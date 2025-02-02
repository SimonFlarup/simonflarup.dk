import React, { PropsWithChildren, ReactNode } from "react";
import { CVIcon } from "../../icons/SocialIcons";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

export function DescTemplate(props: PropsWithChildren) {
  return(
    <i className="text-sm text-zinc-500 dark:text-zinc-400 text-left">
      {props.children}
    </i>
  )
}

export interface TimelineContent {
    subtitle: string,
    title: string,
    logo?: () => ReactNode,
    start?: {
      label: string,
      dateTime?: number
    },
    end?: {
      label: string,
      dateTime?: number
    },
    description?: ReactNode,
    extendedDescription?: ReactNode,
    customFooter?: ReactNode
  }

export function Timeline(props: {icon: () => ReactNode, title: string, content: TimelineContent[]}) {
  const {t} = useTranslation()
  return (
    <div className="rounded-2xl border border-zinc-100 pt-6 px-6 pb-4 dark:border-zinc-700/40">
      <h2 className="flex items-center text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="flex gap-4 items-center">
          {props.icon()}
          <span className="">{props.title}</span>
        </div>
        <Link className="hidden ml-auto gap-2 xs:flex flex-row items-center border-2 bg-zinc-100/5 dark:bg-zinc-900/20 border-zinc-100 dark:border-zinc-700/40 rounded-xl px-4 py-1 font-normal text-lg" to="/cv">
          <CVIcon className="h-8 w-8 fill-zinc-200 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          {t("download_cv")}
        </Link>
      </h2>
      <ol className="mt-6">
        {props.content.map((entry: TimelineContent, index: number) => (
          <li key={index} className="flex flex-col">
                <div className="w-full flex gap-4">
                {entry.logo && (
                <div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  {entry.logo()}
                </div>
                )}
                <dl className="flex flex-auto flex-wrap gap-x-1">
                    {entry.start && entry.end && (
                        <div>
                            <dd
                            className="text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label={`${entry.start.label ?? entry.start} until ${entry.end.label ?? entry.end
                                }`}
                            >
                                <time dateTime={(entry.start.dateTime ?? entry.start.label).toString()}>
                                {entry.start.label ?? entry.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={(entry.end.dateTime ?? entry.end).toString()}>
                                {entry.end.label ?? entry.end}
                                </time>
                            </dd>
                        </div>
                  )}
                  <dd className="w-full flex font-medium text-zinc-900 dark:text-zinc-100">
                    {entry.title}
                  </dd>
                  <dd className="text-sm text-zinc-500 dark:text-zinc-400">
                    {entry.subtitle}
                  </dd>
                </dl>
                </div>
                <div className={entry.description ? "flex gap-4 mt-4" : 'hidden'}>
                    <span style={{marginLeft: "-30px"}} className="relative flex w-16 flex-none items-center justify-center border-r-2 border-zinc-100 dark:border-zinc-700/40"/>
                    {entry.description}
                </div>
                <div className="flex gap-4">
                  <span style={{marginLeft: "-30px"}} className="relative flex w-16 flex-none items-center justify-center border-r-2 border-zinc-100 dark:border-zinc-700/40"/>
                  {entry.extendedDescription}
                </div>
                <div className="flex gap-4 mb-4">
                  <span style={{marginLeft: "-30px"}} className="relative flex w-16 flex-none items-center justify-center border-r-2 border-zinc-100 dark:border-zinc-700/40"/>
                  {entry.customFooter}
                </div>
          </li>
        ))}
      </ol>
    </div>
  )
}