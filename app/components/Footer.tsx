import { getFooter } from "../services/fetchService"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export default async function Footer() {

    const landingFooter = await getFooter();
    return (

        landingFooter.map((singlePost: any) => {
            const { titletwo, footer, id } =
                singlePost.fields;
            return (
                <div key={id}>
                    <h1>{titletwo}</h1>
                    {documentToReactComponents(footer)}
                </div>
            )
        })
    )
}
