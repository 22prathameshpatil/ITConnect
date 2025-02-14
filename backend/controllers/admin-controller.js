const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const handleAdminUsers = async(req,res,next)=>{
        try {
            const users = await User.find({},{password:0});
            if(!users || users.length === 0){
                res.status(404).json({"message":"Users not found"});
                return;
            }
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
}

const handleAdminContacts = async(req,res,next)=>{
            try {
                const contacts = await Contact.find({});
                if(!contacts || contacts.length === 0){
                    res.status(404).json({"message":"Contacts not found"});
                    return;
                }
                res.status(200).json(contacts);
            } catch (error) {
                next(error);
            }

}

const handleDeleteUserById = async(req,res,next)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).json({"message":"User not found"});
            return;
        }
        res.status(200).json({"message":"User deleted successfully"});
    } catch (error) {
        next(error);
    }
}

const handlegetUserById = async(req,res,next)=>{
    try {
        const user = await User.findOne({_id:req.params.id},{password:0});
        if(!user){
            res.status(404).json({"message":"User not found"});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const handleUpdateUserById = async(req,res,next)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        if(!user){
            res.status(404).json({"message":"User not found"});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


const handleDeleteContactById =async (req,res,next)=>{
try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
        res.status(404).json({"message":"Contact not found"});
        return;
    }
    res.status(200).json({"message":"Contact deleted successfully"});
} catch (error) {
    next(error);
}     
}


module.exports = {handleUpdateUserById,handlegetUserById,handleAdminUsers,handleDeleteUserById,handleAdminContacts,handleDeleteContactById };