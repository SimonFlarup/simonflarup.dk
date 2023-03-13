import React, { PropsWithChildren } from 'react'

function OuterContainer(props: PropsWithChildren<ContainerProps>) {
  return (
    <div {...props} ref={props.ref} className={'sm:px-8 ' + props.className}>
      <div className="mx-auto max-w-7xl lg:px-8">{props.children}</div>
    </div>
  )
}

function InnerContainer(props: PropsWithChildren<ContainerProps>) {
  return (
    <div
      {...props}
      ref={props.ref}
      className={'relative px-4 sm:px-8 lg:px-12 ' + props.className}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{props.children}</div>
    </div>
  )
}

interface ContainerProps {
  ref?: any
  className?: string
}

export function Container(props: PropsWithChildren<ContainerProps>
) {
  return (
    <OuterContainer {...props} ref={props.ref} >
      <InnerContainer ref={props.ref}>{props.children}</InnerContainer>
    </OuterContainer>
  )
}

Container.Outer = OuterContainer
Container.Inner = InnerContainer
