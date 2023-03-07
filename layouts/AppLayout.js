import Container from "../components/Container";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useAppContext} from "../context/AppContext";
import BurgerMenu from "../components/BurgerMenu";
import {useEffect} from "react";

export function AppLayout({className = '', children}) {
    const {state, dispatch} = useAppContext();
    const {burgerMenuActive, burgerMenuOffset} = state;

    useEffect(() => {
        if (!burgerMenuActive) {
            window.scrollTo(0, parseInt(burgerMenuOffset || '0'));
        }
    }, [burgerMenuActive, burgerMenuOffset]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && burgerMenuActive) {
                dispatch({type: 'close_burger_menu'})
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [burgerMenuActive, dispatch]);

    return (
        <div className={`w-full font-sans flex flex-col ${burgerMenuActive ? `h-win fixed` : 'min-h-win'} ${className}`}
             style={{
                 top: burgerMenuActive ? `-${burgerMenuOffset}px` : 'auto'
             }}
        >
            <Nav/>
            {burgerMenuActive && <BurgerMenu/>}

            <main className="pt-10 flex-1">
                <Container>
                    {children}
                </Container>
            </main>
            <Footer/>
        </div>
    )
}