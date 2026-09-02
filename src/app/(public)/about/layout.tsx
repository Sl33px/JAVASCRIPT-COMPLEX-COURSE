import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AboutLayout metadata',
    description: 'layout description: about'
}

type Props = { children: React.ReactNode }
const AboutLayout = ({ children }: Props) => {
    return (
        <>
            about layout
            {children}
        </>
    )
}

export default AboutLayout