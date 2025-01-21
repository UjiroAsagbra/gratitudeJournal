import mongoose from "mongoose";
import Journal from "../models/journal.model.js";

export const getEntry = async (req, res) => {
  try{
    const entry = await Journal.find({user_id: req.user.id});
    
    res.status(200).json({success:true, data: entry})
    
    
  }
  catch(error){
    res.status(500).json({success:false, message: "server error"});
  }
}

export const createEntry = async (req, res)=> {
  const {title, details} = req.body;
  if(!title || !details){
    return res.status(400).json({success: false, message: "all fields required"})
  }
try{
  
const entry = await Journal.create({
      title, 
      details,
      user_id: req.user.id
});

const newEntry = await entry.save();

  res.status(201).json(newEntry)

}catch(error){
  res.status(500).json({ success: false, message: "Server error" });
}
    
}


export const updateEntry = async(req,res) => {
  const {id} = req.params;
  const entry = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({success:false, message:"Entry not found"})
  }
  
  try{
    const updatedEntry = await Journal.findByIdAndUpdate(id, entry,{new:true});
    res.status(200).json({success:true, data: updatedEntry})
  }catch(error){
    res.status(500).json({success: false, message:" Server Error"})
  }

}

export const deleteEntry = async(req, res) => {
  const { id } = req.params;
  const entry = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({success:false, message:"Invalid Entry Id"})
  }
  if (entry.user_id !==req.user_id){
    res.status(403).json({success: false, message: "User don't have permission to delete entry"})
  }
  try{
    await Journal.findByIdAndDelete(id);
    res.status(200).json({success:true, message:"Entry deleted"})

  } catch(error){
    res.status(500).json({success:false, message: "Server Error"})

  }

}
