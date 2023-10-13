import React, { PropsWithChildren } from 'react'

function OuterContainer(props: PropsWithChildren<ContainerProps>) {
  let printHideClass = props.printHide ? "print:hidden" : ""
  let printBlockClass = props.printHide ? "print:block" : ""
  return (
    <div>
      <div {...props} ref={props.ref} className={'hidden sm:px-2 ' + props.className + ' ' + printBlockClass}>
        <div className="mx-auto">{props.children}</div>
      </div>
      <div {...props} ref={props.ref} className={'sm:px-8 ' + props.className + ' ' + printHideClass}>
        <div className="mx-auto max-w-7xl lg:px-8 ">{props.children}</div>
      </div>
    </div>
  )
}

function InnerContainer(props: PropsWithChildren<ContainerProps>) {
  let printHideClass = props.printHide ? "print:hidden" : ""
  let printBlockClass = props.printHide ? "print:block" : ""
  return (
    <div>
      <div
        {...props}
        ref={props.ref}
        className={'hidden relative ' + props.className + ' ' + printBlockClass}
      >
        <div className="mx-auto">{props.children}</div>
      </div>
      
      <div
        {...props}
        ref={props.ref}
        className={'relative px-4 sm:px-8 lg:px-12 ' + props.className + ' ' + printHideClass}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{props.children}</div>
      </div>
    </div>
  )
}

interface ContainerProps {
  ref?: any
  className?: string
  printHide?: boolean
}

export function Container(props: PropsWithChildren<ContainerProps>
) {
  return (
    <OuterContainer {...props} ref={props.ref} >
      <InnerContainer printHide={props.printHide} ref={props.ref}>{props.children}</InnerContainer>
    </OuterContainer>
  )
}

Container.Outer = OuterContainer
Container.Inner = InnerContainer
