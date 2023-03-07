import Link from "next/link";

export default function LogoLink({className = '', ...rest}) {
    return (
        <Link href="/" aria-label="Go to homepage" className={className}>
            Logo
        </Link>
    )
}