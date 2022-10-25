import Item from "../models/Item.js";

export const addItem=async(req,res)=>{
    const itemData=req.body;
    const newItem=new Item(itemData)
    try {
        await newItem.save()
        console.log(newItem)
        res.status(201).json(newItem)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const getAllItems=async(req,res)=>{
    try {
        const items=await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const deleteItem=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
        await Item.findByIdAndDelete({_id:id})
        res.status(201).json(id)
    } catch (error) {
        res.status(404).json({message:error})
    }
}