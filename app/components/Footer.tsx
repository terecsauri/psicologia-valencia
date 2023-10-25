import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getData } from "../services/fetchService";
export default async function Footer() {

    const landingFooter = await getData("footer");
    return (

        landingFooter?.map((singlePost: any) => {
            const { tittle, web, footer, id } =
                singlePost.fields;
            return (
                <div key={id} className="ml-10 mt-5">
                    <hr className="mb-10 mt-10"></hr>
                    <p className='font-bold mb-2' >{tittle}</p>
                    {documentToReactComponents(footer)}
                   <p className='font-bold mt-5 '>{web}</p>
                </div>
            )
        })
    )
}
