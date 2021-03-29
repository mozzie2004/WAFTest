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

        default: 
            return {
                ...state
            }
    }

}

export default reducer;