import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata',
    description: 'layout description: cars'
}

type Props = {children: React.ReactNode};
const UsersLayout = ({ children }: Props) => {
    return (
        <div>
            Users layout
            {children}
        </div>
    )
}

export default UsersLayout;