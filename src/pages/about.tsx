import { StaticImage } from 'gatsby-plugin-image'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Container } from '../components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '../components/icons/SocialIcons'
import Layout from '../components/layout/Layout'

function SocialLink({ className, href, children, icon: Icon }: PropsWithChildren<{ className: string, href: string, icon: any }>) {
  return (
    <li className={className + ' flex'}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

function Info({ className, children, icon: Icon }: PropsWithChildren<{ className: string, icon: any }>) {
  return (
    <li className={className + ' flex'}>
      <div
        className="group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition" />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function PhoneIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}>
      <path
        fillRule="evenodd"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function CakeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}>
      <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
    </svg>

  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}>
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>

  )
}

function IdIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}>
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>


  )
}


export default function About() {
  const intl = useIntl()
  const [age, setAge] = useState(24)

  function calculateAge(birthday: Date) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    setAge(calculateAge(new Date("1998-12-01")))
  }, []);

  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <StaticImage
                src="../images/simon_wall.jpg"
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-[9/10] -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {intl.formatMessage({ id: "about_header" })}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {intl.formatMessage({ id: "about_content_p1" })} <b>{intl.formatMessage({ id: "about_velocity" })}</b>, <b>{intl.formatMessage({ id: "about_quality" })}</b> {intl.formatMessage({ id: "about_and" })} <b>{intl.formatMessage({ id: "about_longevity" })}</b>
              </p>
              <p>
                {intl.formatMessage({ id: "about_content_p2" })}
              </p>
              <p>
                {intl.formatMessage({ id: "about_content_p3" })}
              </p>
              <p>
                {intl.formatMessage({ id: "about_content_p4" })}
              </p>
              <p>
                {intl.formatMessage({ id: "about_content_p5" })}
              </p>
              <p>
                {intl.formatMessage({ id: "about_content_p6" })} <a className="text-red-500 dark:text-red-400" href={"mailto:mail+contact@simonflarup.dk"}>{intl.formatMessage({ id: "about_content_contant_catch_phrase" })}</a>
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <Info icon={IdIcon} className="mt-4">
                Simon Holland Flarup ({intl.formatMessage({ id: "pronoun" })})
              </Info>
              <Info icon={CakeIcon} className="mt-4">
                {intl.formatMessage({ id: "born-in" })} 1998 ({age} {intl.formatMessage({ id: "years_old_abbr" })})
              </Info>
              <Info icon={HomeIcon} className="mt-4">
                {intl.formatMessage({ id: "about_location" })}
              </Info>
              <SocialLink href="https://github.com/SimonFlarup" icon={GitHubIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              {intl.formatMessage({ id: "aria-follow-on-github" })}
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/SimonFlarup" icon={LinkedInIcon} className="mt-4">
              {intl.formatMessage({ id: "aria-follow-on-linkedin" })}
              </SocialLink>
              <SocialLink
                href="mailto:mail+contact@simonflarup.dk"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mail@simonflarup.dk
              </SocialLink>
              <SocialLink
                href="tel:004520995563"
                icon={PhoneIcon}
                className="mt-4"
              >
                (+45) 20 99 55 63
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"
import Seo from "../components/layout/Seo"
import { HeadFC } from "gatsby"
import { useIntl } from 'react-intl'

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["about_title"], "da-DK": DA["about_title"] }

  return (
    <Seo locale={locale} title={title} />
  )
}
