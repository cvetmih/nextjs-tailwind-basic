import Link from "next/link";

export default function Button({className = '', href, children, ...rest}) {
    const classes = `button ${className}`;

    if (href) {
        return (
            <Link href={href}
                  className={classes}
                  {...rest}
            >
                {children}
            </Link>
        )
    }
    return (
        <button className={classes}
                {...rest}
        >
            {children}
        </button>
    )
}