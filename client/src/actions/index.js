const foodsLoaded = (foods)=>{
    return {
        type: 'FOODS-LOADED',
        payload: foods
    }
}

const foodsRequested = ()=>{
    return {
        type: 'FOODS-REQUESTED'
    }
}

const foodsError = ()=>{
    return {
        type: 'FOODS-ERROR'
    }
}


export {foodsLoaded, foodsRequested, foodsError,}