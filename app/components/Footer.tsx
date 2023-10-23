import { getFooter } from "../services/fetchService"


export default async function Footer() {

    const landingFooter = await getFooter();
    return (
        
            landingFooter.map((singlePost: any) => {
                const { footerTitle, footer, id } =
                    singlePost.fields;
                return (
                    <div key={id}>
                        <h1>{footerTitle}</h1>
                        {/* <h2>{footer}</h2> */}
                    </div>


                )
            })
    )   
}
