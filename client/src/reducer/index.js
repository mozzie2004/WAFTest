let initialState = {
    foods: [],
    loading: false,
    error: false
}

const reducer = (state=initialState, action) => {

    switch(action.type) {
        case 'FOODS-LOADED':
            return {
                ...state,
                foods: action.payload,
                loading: false,
                error: false
            }

        case 'FOODS-REQUESTED':
            return {
                ...state,
                loading: true,
                error: false
            }

        case 'FOODS-ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }

        case 'FOODS-UPDATE':
            const idx = state.foods.findIndex(item=>item.id.toString() === action.payload.id.toString());

            return {
                ...state,
                foods: [...state.foods.slice(0, idx), action.payload, ...state.foods.slice(idx+1)]
            }

        case 'FOODS-ADD':
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }

        case 'FOODS-DEL':
            const index = state.foods.findIndex(item=>item.id.toString() === action.payload.toString());

            return {
                ...state,
                foods: [...state.foods.slice(0, index), ...state.foods.slice(index+1)]
            }    

        default: 
            return {
                ...state
            }
    }

}

export default reducer;