import {useAppContext} from "../context/AppContext";

export default function BurgerButtonClose({className = '', ...rest}) {
    const {dispatch} = useAppContext();

    const handleClick = () => {
        const offset = window ? window.scrollY : 0;

        dispatch({
            type: 'open_burger_menu',
            value: offset
        })
    }

    return (
        <button className={`border-0 rounded-none ${className}`}
                onClick={handleClick}
                aria-label="Open Menu"
                {...rest}
        >
            Menu
        </button>
    )
}