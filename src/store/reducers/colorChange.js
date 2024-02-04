import { Colors } from "../../colors/Colors";

const initialState = {
    primaryColor: Colors.default.primary,
    secondaryColor: Colors.default.secondary
};

const colorChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEFAULT':
            return {
                ...state,
                primaryColor: Colors.default.primary,
                secondaryColor: Colors.default.secondary
            };
        case 'PROTANOPIA':
            return {
                ...state,
                primaryColor: Colors.protanopia.primary,
                secondaryColor: Colors.protanopia.secondary,
            };
        case 'DEUTERANOPIA':
            return {
                ...state,
                primaryColor: Colors.deuteranopia.primary,
                secondaryColor: Colors.deuteranopia.secondary,
            };
        case 'TRITANOPIA':
            return {
                ...state,
                primaryColor: Colors.tritanopia.primary,
                secondaryColor: Colors.tritanopia.secondary,
            };
        default:
            return state;
    }
};

export default colorChangeReducer;
