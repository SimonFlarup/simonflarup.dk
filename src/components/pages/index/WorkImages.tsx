import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export function urImg() {
    return (
        <StaticImage
            src={"../../../images/logos/universalrobots.png"}
            alt=""
            className="h-9 w-9 object-contain bg-white rounded-md"
            objectFit="contain"
        />
    )
}

export function broenImg() {
    return (
        <StaticImage
            src={"../../../images/logos/broen.jpg"}
            alt=""
            className="h-9 w-9 object-contain"
            objectFit="contain"
        />
    )
}

export function elgigantenImg() {
    return (
        <StaticImage
            src={"../../../images/logos/elgiganten.jpg"}
            alt=""
            className="h-9 w-9 object-contain"
            objectFit="contain"
        />
    )
}