import { Menu, Popover, Transition } from '@headlessui/react'

import { Container } from '../Container'
import {Link, useI18next, useTranslation} from 'gatsby-plugin-react-i18next';
import React, { Fragment, PropsWithChildren } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import darkModeToggleHandler from '../DarkModeSwitchScript'
import { ChevronDownIcon, CloseIcon, GlobeIcon, SunIcon, MoonIcon } from '../icons/HeaderIcons'
import { graphql } from 'gatsby';

const MobileNavItem: React.FC<PropsWithChildren> = props => {
  return (
    <li>
      <Popover.Button className="block py-2">
        {props.children}
      </Popover.Button>
    </li>
  )
}

const MobileNavigation: React.FC<PropsWithChildren<PropsWithClassName>> = props => {
  const {t} = useTranslation();

  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        {t("menu")}
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label={t("aria-close-menu")} className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {t("navigation")}
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem><Link to={"/"}>{t("home")}</Link></MobileNavItem>
                <MobileNavItem><Link to={"/about/"}>{t("about")}</Link></MobileNavItem>
                {/*
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
                */}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

const NavItem: React.FC<PropsWithChildren> = props => {
  let isActive = false
  return (
    <li>
      <div
        className={'relative block px-3 py-2 transition ' + (isActive
          ? 'text-red-500 dark:text-red-400'
          : 'hover:text-red-500 dark:hover:text-red-400')
        }
      >
        {props.children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0" />
        )}
      </div>
    </li>
  )
}

function DesktopNavigation(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) {
  const {t} = useTranslation();

  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem><Link to={"/"}>{t("home")}</Link></NavItem>
        <NavItem><Link to={"/about/"}>{t("about")}</Link></NavItem>
      </ul>
    </nav>
  )
}

enum Language {
  English = "en",
  Danish = "da"
}

function LanguageDropdown() {
  const {languages, changeLanguage} = useI18next();


  const switchLanguage = (language: Language) => {
    changeLanguage(language)
  }

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            <GlobeIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 dark:fill-zinc-700 dark:stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 group-hover:fill-red-50 dark:group-hover:fill-red-500/10 group-hover:stroke-red-600 dark:group-hover:stroke-red-500" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage(Language.English)}
                    className={`${active ? 'bg-red-500 text-white' : 'text-zinc-800 dark:text-zinc-200'
                      } group flex w-full items-center rounded-md px-6 py-2 text-sm justify-center`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>
              <hr className="my-1 border-zinc-200" />
              <Menu.Item>
                {({ active }) => (

                  <button
                    onClick={() => switchLanguage(Language.Danish)}
                    className={`${active ? 'bg-red-500 text-white' : 'text-zinc-800 dark:text-zinc-200'
                      } group flex w-full items-center rounded-md px-6 py-2 text-sm justify-center`}
                  >
                    Dansk
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function ModeToggle() {
  const {t} = useTranslation()

  const toggleOnClick = function () {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }

    darkModeToggleHandler()
  }

  return (
    <button
      type="button"
      aria-label={t("aria-toggle-dark-mode")}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleOnClick}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden group-hover:fill-red-50 group-hover:stroke-red-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block group-hover:stroke-zinc-400 group-hover:fill-red-400/10 group-hover:stroke-red-500" />
    </button>
  )
}

type PropsWithClassName<P = unknown> = P & {
  className?: string;
}

const AvatarContainer: React.FC<PropsWithChildren<PropsWithClassName>> = props => {
  const {t} = useTranslation()
  
  return (
    <Link
      to="/"
      aria-label={t("home")}
      className={props.className + ' pointer-events-auto'}
      {...props}
    >
    <div
      className={
        props.className +
        ' h-24 w-24 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 overflow-hidden'
      }
      {...props}
    />
    </Link>
  )
}

const Avatar: React.FC<PropsWithChildren<PropsWithClassName>> = props => {
  return (
      <StaticImage
        src={"../../images/simon_portrait_ur.jpg"}
        alt=""
        className={'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-28 w-28'}
      />
  )
}

export default function Header(props: {printHide?: boolean}) {
  let printClass = props.printHide ? "print:hidden" : ""

  return (
    <>
      <header className={"pointer-events-none relative z-50 flex flex-col mb-5 " + printClass}>
        <div className="top-0 z-10 pt-6">
          <Container>
            <div className="relative flex items-center gap-4">
              <div className="flex flex-1">
                <AvatarContainer className={"left-0 top-3 origin-left transition-opacity pointer-events-auto"}>
                  <Avatar className="block h-24 w-24 origin-left" />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto flex gap-2">
                  <ModeToggle />
                  <LanguageDropdown />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
