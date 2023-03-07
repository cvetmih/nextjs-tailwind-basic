import Container from "./Container";
import {getFullYear} from "../helpers/date";
import Link from "next/link";
import {footerLinks, socialLinks} from "../helpers/links";

export default function Footer({className = '', ...rest}) {
    return (
        <footer className={`bg-blue-400 ${className}`} {...rest}>
            <Container className="flex flex-col-reverse md:flex-row items-start justify-between">
                <div className="flex flex-col">
                    <p>
                        &copy; {getFullYear()}
                    </p>

                    <div className="flex items-center gap-2">
                        <Link href={socialLinks.instagram}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="mouse-hover:underline"
                        >
                            Instagram
                        </Link>
                        <Link href={socialLinks.facebook}
                              target="_blank"
                              rel="nofollow noreferrer"
                              className="mouse-hover:underline"
                        >
                            Facebook
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center">
                    {footerLinks.map(({href, label}, key) => {
                        return (
                            <Link href={href} key={`FooterLink: ${key}`} className="">
                                {label}
                            </Link>
                        )
                    })}
                </div>
            </Container>
        </footer>
    )
}