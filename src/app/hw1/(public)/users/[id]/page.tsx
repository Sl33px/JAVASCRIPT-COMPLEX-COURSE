import type { Metadata } from 'next';
import {FC} from "react";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `User page title ${id}`
    }
}

type Props = {
    params: {id: string}
}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params

    return (
        <div>
            User page content. <br/>
            User number: {id}
        </div>
    )
}

export default UserPage;