import type { Metadata } from 'next';
import {FC} from "react";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post page title ${id}`
    }
}

type Props = {
    params: {id: string}
}

const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params

    return (
        <div>
            Post page content. <br/>
            Post number: {id}
        </div>
    )
}

export default PostPage;