import Item from "../models/ItemModel.js";

export const getItems = async (req, res)=>{
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getItemsById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveItems = async (req, res) => {
    const item = new Item(req.body);
    try {
        const inserteditem = await item.save();
        res.status(201).json(inserteditem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteItems = async (req, res) => {
    try {
        const deleteditem = await Item.deleteOne({_id:req.params.id});
        res.status(200).json(deleteditem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateItems = async (req, res) => {
    try {
        const updateditem = await Item.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateditem);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}