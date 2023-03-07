import '../styles/globals.css'
import {AppLayout} from "../layouts/AppLayout";
import {useEffect} from "react";
import {AppWrapper} from "../context/AppContext";

function setWinHeightVariable() {
    document?.documentElement.style.setProperty(
        '--win-height',
        window ? `${window.innerHeight}px` : '100vh'
    );
}

function MyApp({Component, pageProps}) {
    useEffect(() => {
        window.addEventListener('resize', setWinHeightVariable);
        setWinHeightVariable();

        return () => {
            window.removeEventListener('resize', setWinHeightVariable);
        }
    }, []);

    return (
        <AppWrapper>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </AppWrapper>
    )
}

export default MyApp
