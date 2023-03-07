import {Head, Html, Main, NextScript} from 'next/document'
import webConfig from "../website.config";
import {useAppContext} from "../context/AppContext";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color={webConfig.themeColor}/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name="msapplication-TileColor" content={webConfig.themeColor}/>
                <meta name="msapplication-config" content="/browserconfig.xml"/>
                <meta name="theme-color" content={webConfig.themeColor}/>
                {/* OG DATA */}
                <meta property="og:title" content={webConfig.og.title}/>
                <meta property="og:site_name" content={webConfig.og.siteName}/>
                <meta property="og:url" content={webConfig.og.url}/>
                <meta property="og:description" content={webConfig.og.description}/>
                <meta property="og:type" content={webConfig.og.type}/>
                <meta property="og:image" content={webConfig.og.image}/>

            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}