import { request } from "express";
import Cust from "../models/CustomerModel.js";

export const getCust = async(req, res) => {
    try{
        const response = await Cust.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getCustById = async(req, res) => {
    try{
        const response = await Cust.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const CreateCust = async(req, res) => {
    try{
        await Cust.create(req.body);
        res.status(201).json({msg: "Customer Created Successfully!"});
    }catch(error){
        console.log(error.message);
    }
}

export const UpdateCust = async(req, res) => {
    try{
        await Cust.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Customer Updated Successfully!"});
    }catch(error){
        console.log(error.message);
    }
}

export const DeleteCust = async(req, res) => {
    try{
        await Cust.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Customer Deleted Successfully!"});
    }catch(error){
        console.log(error.message);
    }
}

