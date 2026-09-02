import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UsersLayout metadata',
    description: 'layout description: users'
}

type Props = {children: React.ReactNode};
const UsersLayout = ({ children }: Props) => {
    return (
        <div>
            users layout
            {children}
        </div>
    )
}

export default UsersLayout;