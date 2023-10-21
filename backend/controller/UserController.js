import User from "../models/UserModel.js";
import SPD from "../models/SPD.js"
import SPB from "../models/SPB.js";
import SPRR from "../models/SPRR.js";
import SUK from "../models/SUK.js";
import SUR from "../models/SUR.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPB = async(req, res) => {
    try {
        const response = await SPB.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPD = async(req, res) => {
    try {
        const response = await SPD.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPRR = async(req, res) => {
    try {
        const response = await SPRR.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSUK = async(req, res) => {
    try {
        const response = await SUK.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSUR = async(req, res) => {
    try {
        const response = await SUR.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getUsersById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPBById = async(req, res) => {
    try {
        const response = await SPB.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPDById = async(req, res) => {
    try {
        const response = await SPD.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSPRRById = async(req, res) => {
    try {
        const response = await SPRR.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSUKById = async(req, res) => {
    try {
        const response = await SUK.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}
export const getSURById = async(req, res) => {
    try {
        const response = await SUR.findOne({
            where:{
                id: req.params.id
            }
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const createSPB = async(req, res) => {
    try {
        await SPB.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const createSPD = async(req, res) => {
    try {
        await SPD.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const createSPRR = async(req, res) => {
    try {
        await SPRR.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const createSUK = async(req, res) => {
    try {
        await SUK.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const createSUR = async(req, res) => {
    try {
        await SUR.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateSPB = async(req, res) => {
    try {
        await SPB.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateSPD = async(req, res) => {
    try {
        await SPD.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const updateSPRR = async(req, res) => {
    try {
        await SPRR.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const updateSUK = async(req, res) => {
    try {
        await SUK.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const updateSUR = async(req, res) => {
    try {
        await SUR.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const deleteSPB = async(req, res) => {
    try {
        await SPB.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const deleteSPD = async(req, res) => {
    try {
        await SPD.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const deleteSPRR = async(req, res) => {
    try {
        await SPRR.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const deleteSUK = async(req, res) => {
    try {
        await SUK.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}
export const deleteSUR = async(req, res) => {
    try {
        await SUR.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.massage);
    }
}