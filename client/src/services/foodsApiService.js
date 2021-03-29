const getAllFoods = async () => {

    const result = await fetch('/api/foods');

    if (!result.ok) {
        throw new Error('server error')
    }

    return await result.json();
}

const addFood = async (data) => {
    const result = await fetch('/api/foods', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    return await result.json();
}


const updateFood = async (data) => {
    const result = await fetch('/api/foods', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    return await result.json();
}

const deleteFood = async (id) => {
    const result = await fetch('/api/foods/' + id, {
        method: 'DELETE'
    });

    return result;
};

export  {getAllFoods, addFood, updateFood, deleteFood};