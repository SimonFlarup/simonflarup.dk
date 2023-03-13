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
                <div className="fixed inset-0 flex justify-center sm:px-8">
                    <div className="flex w-full max-w-7xl lg:px-8">
                        <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                    </div>
                </div>
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

export default Layout