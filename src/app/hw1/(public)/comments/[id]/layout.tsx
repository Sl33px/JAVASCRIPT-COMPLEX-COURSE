import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CommentLayout metadata',
    description: 'layout description: comment'
}

type Props = { children: React.ReactNode }
const CommentLayout = ({ children }: Props) => {
    return (
        <>
            Comment
            {children}
        </>
    )
}

export default CommentLayout