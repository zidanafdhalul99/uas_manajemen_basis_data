import Order from "../models/OrderModel.js";

export const getOrders = async (req, res)=>{
    try {
        let orders;
        if(req.query.limit){
            orders = await Order.find().limit(req.query.limit).sort({_id:-1});
        } else {
            orders = await Order.find();
        }
        res.json(orders);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getOrdersById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveOrders = async (req, res) => {
    const order = new Order(req.body);
    try {
        const insertedorder = await order.save();
        res.status(201).json(insertedorder);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteOrders = async (req, res) => {
    try {
        const deletedorder = await Order.deleteOne({_id:req.params.id});
        res.status(200).json(deletedorder);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}