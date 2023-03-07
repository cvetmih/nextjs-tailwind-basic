export const initialState = {
    burgerMenuActive: false,
    burgerMenuOffset: 0
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "reset_state": {
            return initialState;
        }
        case "open_burger_menu": {
            return {
                ...state,
                burgerMenuActive: true,
                burgerMenuOffset: action.value
            }
        }
        case "close_burger_menu": {
            return {
                ...state,
                burgerMenuActive: false,
            }
        }
        default: {
            console.error('Unknown action type', action.type);
            return state;
        }
    }
};
