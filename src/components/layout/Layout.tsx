import React, { PropsWithChildren } from "react"
import { Footer } from './Footer'
import Header from './Header'

interface LayoutProps {
    printHide?: boolean
}

function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <div className="bg-zinc-50 dark:bg-black" style={{minHeight: "100vh"}}>
            <div className="flex h-full flex-col">

                <FixedBackground printHide={props.printHide}/>

                <FixedBackgroundPrint printHide={props.printHide}/>

                <div className="flex flex-col relative" style={{minHeight: "100vh"}}>
                    <Header printHide={props.printHide} />
                    <main className="flex-grow">
                        {props.children}
                    </main>
                    <Footer printHide={props.printHide}/>
                </div>
            </div>
        </div>
    )
}

function FixedBackground(props: PropsWithChildren<LayoutProps>) {
    let printHideClass = props.printHide ? "print:hidden" : ""
    return(
        <div className={"flex fixed inset-0 justify-center sm:px-8 " + printHideClass}>
            <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
        </div>
    )
}

function FixedBackgroundPrint(props: PropsWithChildren<LayoutProps>) {
    let printFlexClass = props.printHide ? "print:flex" : ""
    return(
        <div className={"hidden fixed inset-0 justify-center " + printFlexClass}>
            <div className="flex w-full">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
        </div>
    )
}

export default Layout