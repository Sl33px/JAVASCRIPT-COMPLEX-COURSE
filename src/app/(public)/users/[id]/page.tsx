import type { Metadata } from 'next';
import {FC} from "react";

type Props = {
    params: {id: string}
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    console.log(id);

    return {
        title: `User page title ${id}`
    }
}

const Page: FC<Props> = async ({params}) => {
    const {id} = await params
    console.log(id);

    return (
        <div>
            user page content. <br/>
            user number: {id}
        </div>
    );
};

export default Page;