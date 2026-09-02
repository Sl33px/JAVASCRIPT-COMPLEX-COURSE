import type { Metadata } from 'next';
import {FC} from "react";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Comment page title ${id}`
    }
}

type Props = {
    params: {id: string}
}

const CommentPage: FC<Props> = async ({params}) => {
    const {id} = await params

    return (
        <div>
            Comment page content. <br/>
            Comment number: {id}
        </div>
    )
}

export default CommentPage;