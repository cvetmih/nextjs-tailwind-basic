import Container from "./Container";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {navLinks} from "../helpers/links";
import LogoLink from "./LogoLink";
import BurgerButtonOpen from "./BurgerButtonOpen";

export default function Nav({className = '', ...rest}) {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-40 ${scrolled ? 'bg-blue-200' : 'bg-blue-200/50'} transition-all duration-300 ${className}`}
            {...rest}
        >
            <Container className="flex items-center justify-between">
                <div>
                    <LogoLink/>
                </div>
                <div className="hidden md:flex items-center">
                    {navLinks.map(({href, label}, key) => {
                        const active = router.pathname.split('?')[0] === href;

                        return (
                            <Link href={href}
                                  key={`NavLink: ${key}`}
                                  className={`text-base ${active ? 'font-bold' : ''}`}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </div>
                <div className="block md:hidden">
                    <BurgerButtonOpen/>
                </div>
            </Container>
        </nav>
    )
}