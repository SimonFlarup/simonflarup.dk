import React, { PropsWithChildren } from "react"
import { useIntl } from "react-intl"
import { Container } from '../Container'
import { Link } from "gatsby-plugin-intl"
import { GatsbyLinkProps } from "gatsby"

function NavLink({ children, ...props }: PropsWithChildren<GatsbyLinkProps<any>>) {
  return (
    <Link
      to={props.to}
      className="transition hover:text-red-500 dark:hover:text-red-400"
    >
      {children}
    </Link>
  )
}

export function Footer(props: {printHide?: boolean}) {
  const intl = useIntl()

  let printClass = props.printHide ? "print:hidden" : ""

  return (
    <footer className={"mt-8 " + printClass}>
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              {
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink to="/">{intl.formatMessage({id: "home"})}</NavLink>
                <NavLink to="/about/">{intl.formatMessage({id: "about"})}</NavLink>
                <NavLink to="/privacy/">{intl.formatMessage({ id: "privacy_title" })}</NavLink>
              </div>
              }
              <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
                {intl.$t({ id: 'powered-by' })}
                <a href="https://www.gatsbyjs.com/" className="transition hover:text-red-500 dark:hover:text-red-400"> GatsbyJS </a>
                -
                <a href="https://www.tailwindcss.com/" className="transition hover:text-red-500 dark:hover:text-red-400"> TailwindCSS </a>
                -
                <a href="https://www.headlessui.com/" className="transition hover:text-red-500 dark:hover:text-red-400"> Headless UI </a>
                -
                <a href="https://www.heroicons.com/" className="transition hover:text-red-500 dark:hover:text-red-400"> Heroicons</a>
                {" | "}
                {intl.$t({ id: 'hosted-on' })}
                <a href="https://pages.github.com/" className="transition hover:text-red-500 dark:hover:text-red-400"> GitHub Pages</a>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
