const { Router } = require('express');
const Food = require('../models/Food');
const router = Router();

router.get('/', async (req, res) => {
    try {

        const foods = await Food.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        res.status(200).json(foods)

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'server error'
        })
    }

})

router.post('/', async (req, res) => {
    try {
        const {title, price, img, description} = req.body;
        const food = await Food.create({title, price, img, description});
        res.status(201).json(food);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'server error'
        })
    }

});

router.put('/', async (req, res) => {
    try {

        const food = await Food.findByPk(+req.body.id);
        food.title = req.body.title;
        food.img = req.body.img;
        food.price = +req.body.price;
        food.description = req.body.description;

        await food.save();
        res.status(201).json(food);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'server error'
        })
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const food = await Food.findByPk(+req.params.id);
        await food.destroy()
        res.status(204).json({id: req.params.id});

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'server error'
        })
    }

});



module.exports = router;