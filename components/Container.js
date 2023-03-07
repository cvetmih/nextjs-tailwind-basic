export default function Container({className = '', children, ...rest}) {
    return (
        <div className={`w-full max-w-[1200px] px-8 md:px-10 mx-auto ${className}`} {...rest}>
            {children}
        </div>
    )
}