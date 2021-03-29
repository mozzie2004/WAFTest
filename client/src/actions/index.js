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

const foodUpdate = (food)=>{
    return {
        type: 'FOODS-UPDATE',
        payload: food
    }
}

const foodAdd = (food)=>{
    return {
        type: 'FOODS-ADD',
        payload: food
    }
}

const foodDel = (id)=>{
    return {
        type: 'FOODS-DEL',
        payload: id
    }
}


export {foodsLoaded, foodsRequested, foodsError, foodUpdate, foodAdd, foodDel}