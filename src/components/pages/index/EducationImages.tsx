import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export function sduImg() {
    return (
        <StaticImage
            src={"../../../images/logos/sdu.jpg"}
            alt=""
            className="h-7 w-7 object-contain"
        />
    )
}

export function randersHfImg() {
    return (
        <StaticImage
            src={"../../../images/logos/randershf.png"}
            alt=""
            className="h-7 w-7 object-contain"
        />
    )
}

export function aarhusTechImg() {
    return (
        <StaticImage
            src={"../../../images/logos/aarhustech.jpg"}
            alt=""
            className="h-7 w-7 object-contain"
        />
    )
}

export function tradiumImg() {
    return (
        <StaticImage
            src={"../../../images/logos/tradium.jpg"}
            alt=""
            className="h-7 w-7 object-contain"
            objectFit="contain"
        />
    )
}

export function bsImg() {
    return (
        <StaticImage
            src={"../../../images/logos/bs.png"}
            alt=""
            className="h-7 w-7 object-contain"
        />
    )
}