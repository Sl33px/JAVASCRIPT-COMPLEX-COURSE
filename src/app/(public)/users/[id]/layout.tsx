import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UserLayout metadata',
    description: 'layout description: user'
}

type Props = { children: React.ReactNode }
const UserLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default UserLayout