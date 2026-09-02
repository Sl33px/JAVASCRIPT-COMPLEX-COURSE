import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Comments Layout metadata',
    description: 'layout description: comments'
}

type Props = {children: React.ReactNode};
const CommentsLayout = ({ children }: Props) => {
    return (
        <div>
            Comments layout
            {children}
        </div>
    )
}

export default CommentsLayout;