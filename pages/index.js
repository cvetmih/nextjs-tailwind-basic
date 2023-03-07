import Head from 'next/head'
import {generateTitle} from "../helpers/seo";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{generateTitle('Homepage')}</title>
            </Head>

            Homepage
        </div>
    )
}
