import React from 'react'

export default function ({ className, href, children }) {
    return (
        <a className={className} href={href}>{children}</a>
    )
}

