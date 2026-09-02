import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PostsLayout metadata',
    description: 'layout description: posts'
}

type Props = {children: React.ReactNode};
const PostsLayout = ({ children }: Props) => {
    return (
        <div>
            Posts layout
            {children}
        </div>
    )
}

export default PostsLayout;