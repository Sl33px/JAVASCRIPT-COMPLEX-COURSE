import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ContactsLayout metadata',
    description: 'layout description: contacts'
}

type Props = { children: React.ReactNode }
const ContactsLayout = ({ children }: Props) => {
    return (
        <div>
            contacts layout
            {children}
        </div>
    )
}

export default ContactsLayout