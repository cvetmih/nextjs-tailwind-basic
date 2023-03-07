import {burgerLinks} from "../helpers/links";
import Link from "next/link";
import BurgerButtonClose from "./BurgerButtonClose";

export default function BurgerMenu({className = '', ...rest}) {
    return (
        <nav className={`md:hidden fixed top-0 left-0 w-screen h-win z-50 bg-gray-400 flex p-6 ${className}`} {...rest}>
            <BurgerButtonClose className="absolute top-6 right-6"/>
            <div className="m-auto flex flex-col items-center">
                {burgerLinks.map(({href, label}, key) => {
                    return (
                        <Link
                            href={href}
                            key={`BurgerMenuLink: ${key}`}
                        >
                            {label}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}