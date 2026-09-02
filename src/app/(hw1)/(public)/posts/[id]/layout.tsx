import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PostLayout metadata',
    description: 'layout description: post'
}

type Props = { children: React.ReactNode }
const PostLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default PostLayout