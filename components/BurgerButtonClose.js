import SvgClose from "../svg/SvgClose";
import {useAppContext} from "../context/AppContext";

export default function BurgerButtonClose({className = '', ...rest}) {
    const {dispatch} = useAppContext();

    return (
        <button className={`w-6 border-0 rounded-none ${className}`}
                onClick={() => dispatch({type: 'close_burger_menu'})}
                aria-label="Close Menu"
                {...rest}
        >
            <SvgClose/>
        </button>
    )
}